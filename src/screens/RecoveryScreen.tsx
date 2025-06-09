import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../types';

const RecoveryScreen = ({navigation}:NativeStackScreenProps<AuthStackParamList, "RecoveryScreen">) => {

  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [repeteSenha, setRepeteSenha] = useState('');

  const handleRecover = () => {
    Alert.alert("Instruções enviadas para o seu email")
    console.log('Recuperar senha para:', email, novaSenha, repeteSenha);
  };

  const handleGoToLogin = () => {
    navigation.navigate("LoginScreen")
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
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nova senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ffffffaa"
          value={novaSenha}
          onChangeText={setNovaSenha}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Repita a nova senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          placeholderTextColor="#ffffffaa"
          value={repeteSenha}
          onChangeText={setRepeteSenha}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRecover}>
        <Text style={styles.buttonText}>Recuperar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={handleGoToLogin}>
        <Text style={styles.linkText}>
          Já possui uma conta? <Text style={styles.linkTextBold}>Acesse aqui!</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default RecoveryScreen;

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
  button: {
    backgroundColor: '#4FC3F7',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
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
