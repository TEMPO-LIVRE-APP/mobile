import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { markers } from '../data/markers';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ZoneScreen = ({navigation}:NativeStackScreenProps<HomeStackParamList, "ZoneScreen">) => {

  const [selectedMarkers, setSelectedMarkers] = useState<typeof markers>(markers);

  // Simula filtragem ao clicar nos botões (por bairro):
  const handleFilter = (name: string) => {

    if (name === 'Todos') {
      setSelectedMarkers(markers);
    } else {
      const filtered = markers.filter((marker) => marker.name.includes(name));
      setSelectedMarkers(filtered);
    }
  };

  const mapRef = useRef<MapView | null>(null);

  const initialRegion = {
    latitude: -23.55052, // exemplo SP
    longitude: -46.633308,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Ionicons name="location-sharp" size={20} color="#555" />
            
            <Text style={styles.locationText}>Bairro Jardins - São Paulo SP</Text>

            <TouchableOpacity onPress={() => navigation.push("ConfigScreen")}>
                <Ionicons name="menu" size={28} color="#555" />
            </TouchableOpacity>
        </View>

      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Zonas de deslizamentos</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.buttonScroll}
      >
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Todos')}>
          <Text style={styles.filterButtonText}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Campo Limpo')}>
          <Text style={styles.filterButtonText}>Campo Limpo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Parque Brasilândia')}>
          <Text style={styles.filterButtonText}>Parque Brasilândia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('São')}>
          <Text style={styles.filterButtonText}>São Paulo</Text>
        </TouchableOpacity>
      </ScrollView>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {selectedMarkers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
          />
        ))}
      </MapView>

    </View>
  );
};

export default ZoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    color: '#555',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  buttonScroll: {
    maxHeight: 40,
    marginTop: 16,
    paddingLeft: 16,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    maxHeight: 40,
  },
  filterButtonText: {
    color: '#007bff',
    fontSize: 14,
  },
  map: {
    flex: 1,
    marginTop: 16,
  },
   recenterButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});
