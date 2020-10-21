import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {Feather} from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(()=>{
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    })
  });

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', {id})
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition')
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.8379217,
          longitude: -43.0452713,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.85,
                y: 0.84,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encontrados
        </Text>
        <RectButton style={styles.createOrphanageButton} onPress={()=>{}}>
          <Feather name="plus" size={20} color="#FFF" onPress={handleNavigateToCreateOrphanage}/>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    loading: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
  
    calloutText: {
      color: '#0089A5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
      
      backgroundColor: "#FFF",
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 1.5,
    },
  
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: "#8FA7B3"
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15C3B6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    },
});