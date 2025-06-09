import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types';

const AccountDetailsScreen = ({navigation}:NativeStackScreenProps<HomeStackParamList, "AcountDetails">) => {
  const [accountData, setAccountData] = useState({
    name: 'Barros',
    email: 'barros@teste.comvc ',
    password: '********',
  });

  const handleChange = (field: keyof typeof accountData, value: string) => {
    setAccountData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    
    Alert.alert('Sucesso', 'Dados da conta atualizados.');
     setTimeout(() => navigation.popToTop(), 3000)
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir sua conta? Esta ação não poderá ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => Alert.alert('Conta excluída') },
      ],
    );

    setTimeout(() => navigation.popToTop(), 3000)
    
  };

  return (
    <LinearGradient
      colors={['#00c6ff', '#0072ff']}
      style={styles.container}
    >
      <Text style={styles.title}>Minha Conta</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={accountData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={accountData.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={accountData.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteButtonText}>Excluir conta</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#005ce6',
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

