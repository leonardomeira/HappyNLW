import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

import Orphanage from '../models/orphanage';

export default {
    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return res.json(orphanageView.renderMany(orphanages));
    },

    async show(req: Request, res: Response) {
        const {id} = req.params;

        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return res.json(orphanageView.render(orphanage));
    },

    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = req.body;
    
        const orphanagesRepository = getRepository(Orphanage)

        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return {path: image.filename}
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            latitude: Yup.number().required('Latitude obrigatória'),
            longitude: Yup.number().required('Longitude obrigatória'),
            about: Yup.string().required('Seção `Sobre` obrigatória').max(300),
            instructions: Yup.string().required('Seção `Instruções` obrigatória'),
            opening_hours: Yup.string().required('Horário de funcionamento obrigatório'),
            open_on_weekends: Yup.boolean().required('Erro: Seção `Fins de Semana` não preenchida'),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )

        })
        
        await schema.validate(data, {abortEarly: false});
    
        const orphanage = orphanagesRepository.create(data);
            
    
        await orphanagesRepository.save(orphanage);
    
        return res.status(201).json(orphanage)
    }
}