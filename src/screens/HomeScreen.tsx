import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { HomeStackParamList, MockApiData, WeatherType } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Tipar corretamente o mapa de temas
const weatherThemes: Record<WeatherType, { gradient: string[]; icon: any }> = {
  sunny: {
    gradient: ['#00AEEF', '#0077BE'] as const,
    icon: require('../../assets/icons/sunny.png'),
  },
  cloudy: {
    gradient: ['#C9D6DF', '#E2E2E2'] as const,
    icon: require('../../assets/icons/cloudy.png'),
  },
  night: {
    gradient: ['#4b2b99', '#7b4397'] as const,
    icon: require('../../assets/icons/night.png'),
  },
  rainy: {
    gradient: ['#283E51', '#485563'] as const,
    icon: require('../../assets/icons/rainy.png'),
  },
  storm: {
    gradient: ['#232526', '#414345'] as const,
    icon: require('../../assets/icons/storm.png'),
  },
  snow: {
    gradient: ['#E0EAFC', '#CFDEF3'] as const,
    icon: require('../../assets/icons/snow.png'),
  },
  blizzard: {
    gradient: ['#C9F0F9', '#A0E1EB'] as const,
    icon: require('../../assets/icons/blizzard.png'),
  },
  fire: {
    gradient: ['#FF512F', '#DD2476'] as const,
    icon: require('../../assets/icons/fire.png'),
  },
  flood: {
    gradient: ['#283E51', '#00C6FB'] as const,
    icon: require('../../assets/icons/flood.png'),
  },
};

const mockData: MockApiData = {
  location: 'Bairro Jardins - São Paulo SP',
  temperature: 34,
  weather: 'sunny',
  description: 'Ensolarado',
  uvIndex: 'Very High',
  humidity: 35,
  windSpeed: 10,
  pressure: 1012,
};


const HomeScreen = ({navigation}:NativeStackScreenProps<HomeStackParamList, "HomeScreen">) => {

  const [weatherData, setWeatherData] = useState<MockApiData>();

  useEffect(() => {
    // Simular carregamento da API
    setTimeout(() => {
      setWeatherData(mockData);
    }, 1000);
  }, []);

  if (!weatherData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#fff' }}>Carregando...</Text>
      </View>
    );
  }

  const theme = weatherThemes[weatherData.weather] || weatherThemes.sunny;

  return (

      <LinearGradient colors={theme.gradient} style={styles.container}>

        <View style={styles.header}>
          <Ionicons name="location-sharp" size={20} color="#fff" />
          <Text style={styles.locationText}>{weatherData.location}</Text>
          
          <TouchableOpacity onPress={() => navigation.push("ConfigScreen")}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.weatherCard}>
          <Image source={theme.icon} style={styles.weatherIcon} />
          <Text style={styles.temperatureText}>{weatherData.temperature}°</Text>
          <Text style={styles.descriptionText}>{weatherData.description}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoText}>☀️ {weatherData.uvIndex}</Text>
            <Text style={styles.infoText}>💧 {weatherData.humidity}%</Text>
            <Text style={styles.infoText}>🌬️ {weatherData.windSpeed} km/h</Text>
            <Text style={styles.infoText}>⚖️ {weatherData.pressure} mb</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.push("FormScreen")}>
          <Text style={styles.buttonText}>📢 Informe-nos sobre sua região</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.push('ZoneScreen')}>
          <Text style={styles.buttonText}>⚠️ Zonas de deslizamentos</Text>
        </TouchableOpacity>
      </LinearGradient>

  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  weatherCard: {
    backgroundColor: '#ffffff22',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  weatherIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  temperatureText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  infoRow: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#ffffff33',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
