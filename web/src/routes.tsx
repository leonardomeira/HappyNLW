import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import LoginScreen from './pages/Login';
import PrePasswordRec from './pages/PrePasswordRec';
import PasswordRec from './pages/PasswordRec';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import NotFound from './pages/NotFound';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/prepasswordrec" component={PrePasswordRec} />
                <Route path="/passwordrec" component={PasswordRec} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;