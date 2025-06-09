type FormDataLogin = {
    email: string,
    senha: string,
}

type FormDataRegister = {
  role: string,
  name: string,
  email: string,
  username: string,
  password: string,
  passwordVerify: string,
}

type FormDataRegional = {
  [key: string]: string;
};

type AuthStackParamList = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    RecoveryScreen: undefined,
    HomeStack: undefined,
    HomeScreen: undefined,
}

type HomeStackParamList = {
    HomeScreen: undefined,
    ZoneScreen: undefined,
    FormScreen: undefined,
    ConfigScreen: undefined,
    AcountDetails: undefined,
}

type AuthResponseData = {
    token: string
}

type AuthContextParamList = {
    isAuth: boolean,
    login: () => void,
    logout: () => void,
    Token?: AuthResponseData,
    setToken: (data: AuthResponseData) => void,
}

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

type MockApiData = {
location: string;
  temperature: number;
  weather: WeatherType; // Aqui você informa o tipo permitido
  description: string;
  uvIndex: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
}

export {
    WeatherType,
    MockApiData,
    FormDataLogin,
    FormDataRegional,
    FormDataRegister,
    AuthResponseData,
    HomeStackParamList,
    AuthStackParamList,
    AuthContextParamList,
}