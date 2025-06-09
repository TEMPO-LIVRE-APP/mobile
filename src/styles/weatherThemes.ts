// Definindo um tipo com as opções válidas
type WeatherType =
  | 'sunny'
  | 'cloudy'
  | 'night'
  | 'rainy'
  | 'storm'
  | 'snow'
  | 'blizzard'
  | 'fire'
  | 'flood';

// Tipar corretamente o mapa de temas
const weatherThemes: Record<WeatherType, { gradient: string[]; icon: any }> = {
  sunny: {
    gradient: ['#00AEEF', '#0077BE'],
    icon: require('../../assets/icons/sunny.png'),
  },
  cloudy: {
    gradient: ['#C9D6DF', '#E2E2E2'],
    icon: require('../../assets/icons/cloudy.png'),
  },
  night: {
    gradient: ['#4b2b99', '#7b4397'],
    icon: require('../../assets/icons/night.png'),
  },
  rainy: {
    gradient: ['#283E51', '#485563'],
    icon: require('../../assets/icons/rainy.png'),
  },
  storm: {
    gradient: ['#232526', '#414345'],
    icon: require('../../assets/icons/storm.png'),
  },
  snow: {
    gradient: ['#E0EAFC', '#CFDEF3'],
    icon: require('../../assets/icons/snow.png'),
  },
  blizzard: {
    gradient: ['#C9F0F9', '#A0E1EB'],
    icon: require('../../assets/icons/blizzard.png'),
  },
  fire: {
    gradient: ['#FF512F', '#DD2476'],
    icon: require('../../assets/icons/fire.png'),
  },
  flood: {
    gradient: ['#283E51', '#00C6FB'],
    icon: require('../../assets/icons/flood.png'),
  },
};

export default {weatherThemes};