import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList, FormDataRegister } from '../types';
import { client } from '../api/client';

const RegisterScreen = ({navigation}:NativeStackScreenProps<AuthStackParamList, "RegisterScreen">) => {
  
  const [formData, setFormData] = useState<FormDataRegister>({
    role: "",
    name: "",
    email: "",
    username: "",
    password: "",
    passwordVerify: "",
  });

  const handlerOnChange = (name: keyof FormDataRegister, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    if (formData.password === formData.passwordVerify){
      try {
        const response = await client("/auth/register", {
          role: formData.role,
          name: formData.name,
          email: formData.email,
          username: formData.username,
          password: formData.password,
        })

        if(response.status === 200){
          Alert.alert("Cadastro Realizado!")
        }
      } catch (error) {
        console.log(error);
      }

      navigation.navigate("LoginScreen")

      console.log('Cadastro:', formData);

      setFormData({ role: "", name: "",email:"", username: "", password: "", passwordVerify: ""})

    } else {
      Alert.alert("Senhas diferentes!")
    }
  };

  const handleGoToLogin = () => {
    navigation.navigate("LoginScreen")
    console.log('Ir para tela de login');
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
          onChangeText={(value) => handlerOnChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#ffffffaa"
          value={formData.name}
          onChangeText={(value) => handlerOnChange("name", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ffffffaa"
          value={formData.password}
          onChangeText={(value) => handlerOnChange("password", value)}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Repita a senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          placeholderTextColor="#ffffffaa"
          value={formData.passwordVerify}
          onChangeText={(value) => handlerOnChange("passwordVerify", value)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#4FC3F7', '#00B0FF']}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={handleGoToLogin}>
        <Text style={styles.linkText}>
          Já possui uma conta? <Text style={styles.linkTextBold}>Acesse aqui!</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default RegisterScreen;

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
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
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
