import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { client } from '../api/client';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthResponseData, AuthStackParamList, FormDataLogin } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const LoginScreen = ({navigation}:NativeStackScreenProps<AuthStackParamList, "LoginScreen">) => {

    const [formData, setFormData] = useState<FormDataLogin>({
        email: "",
        senha: ""
    });

  const [esqueciSenha, setEsqueciSenha] = useState(false);
  
  const handlerOnChange = (name: keyof FormDataLogin, value: string) => {
    setFormData(prev => ({...prev, [name]: value}));
  }

  const handlerSubmmit = async () => {
      
        navigation.navigate("HomeScreen")
        
        try {
            const response = await client.post<AuthResponseData>('/auth/login', {
                username: formData.email,
                password: formData.senha,
            });

            if (response.status === 200){
                
            } else {
                Alert.alert("Credenciais inválidas!");
            }
        } catch (error) {
            console.log(error);
        }
        setFormData({email:"", senha: ""})
  }

  const handleGoToRegister = () => {
    navigation.push("RegisterScreen")
  };

  const toggleEsqueciSenha = () => {
    setEsqueciSenha(!esqueciSenha);
    if (esqueciSenha != true){
      navigation.push("RecoveryScreen");
    }
  };

  return (
    <LinearGradient
      colors={['#00AEEF', '#0077BE']}
      style={styles.container}
    >
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#ffffffaa"
          value={formData.email}
          onChangeText={(value) => handlerOnChange("email", value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ffffffaa"
          value={formData.senha}
          onChangeText={(value) => handlerOnChange("senha", value)}
          secureTextEntry
        />
      </View>

     
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleEsqueciSenha}>
        <View style={styles.checkbox}>
          {esqueciSenha && (
            <Ionicons name="checkmark-circle" size={20} color="#fff" />
          )}
          {!esqueciSenha && (
            <View style={styles.checkboxCircle} />
          )}
        </View>
        <Text style={styles.checkboxLabel}>Esqueci a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlerSubmmit} style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#4FC3F7', '#00B0FF']}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={handleGoToRegister}>
        <Text style={styles.linkText}>
          Não tem uma conta?{' '}
          <Text style={styles.linkTextBold}>Cadastre-se aqui!</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 265,
    height: 150,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff',
  },
  checkboxLabel: {
    color: '#fff',
    fontSize: 14,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonGradient: {
    width: 200,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  linkTextBold: {
    fontWeight: 'bold',
  },
});
