import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

export const ConfigScreen = ({navigation}:NativeStackScreenProps<HomeStackParamList, "ConfigScreen">) => {

  const {logout} = useAuth();

  const settingsOptions = [
    { id: 'account', label: 'Conta', icon: 'person-outline' },
    { id: 'notifications', label: 'Notificações', icon: 'notifications-outline', badge: 3 },
    { id: 'privacy', label: 'Privacidade', icon: 'lock-closed-outline' },
    { id: 'help', label: 'Central de ajuda', icon: 'help-outline' },
    { id: 'general', label: 'Geral', icon: 'settings' },
    { id: 'about', label: 'Sobre nós', icon: 'information-outline' },
  ];

  const renderItem = ({ item }: { item: typeof settingsOptions[0] }) => (

    <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.push("AcountDetails")}>

      <View style={styles.optionLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={`${item.icon}`} size={20} color="#fff" />
        </View>
        <Text style={styles.optionText}>{item.label}</Text>
      </View>
      <View style={styles.optionRight}>
        {item.badge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}
        <Ionicons name={"arrow-back"} size={20} color="#000" />
      </View>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingBlock: 10, marginBlock: 20}}>
      
        <Text style={styles.title}>Configurações</Text>

        <TouchableOpacity onPress={() => logout()}>
          <Ionicons name='log-out' size={40} style={{ alignSelf: "center", color: "#fff"}}/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aaff', // fundo azul gradiente (você pode colocar um LinearGradient)
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#00aaff',
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginRight: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
