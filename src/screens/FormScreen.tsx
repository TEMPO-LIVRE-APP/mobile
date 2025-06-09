import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { FormDataRegional, HomeStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const FormScreen = ({navigation}:NativeStackScreenProps<HomeStackParamList, "FormScreen">) => {
  const [formData, setFormData] = useState<FormDataRegional>({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: '',
    question21: '',
    question22: '',
  });

  const handlerOnChange = (name: keyof FormDataRegional, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderQuestion = (number: number, text: string) => {
    const key = `question${number}` as keyof FormDataRegional;

    return (
      <View key={key} style={styles.questionContainer}>
        <Text style={styles.questionText}>{number}. {text}</Text>
        <View style={styles.optionsContainer}>
          {['Sim', 'Não', 'Não sei'].map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                formData[key] === option && styles.optionButtonSelected
              ]}
              onPress={() => handlerOnChange(key, option)}
            >
              <Text
                style={[
                  styles.optionText,
                  formData[key] === option && styles.optionTextSelected
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const handleSubmit = () => {
    Alert.alert("Obrigado pela sua contribuição");
    setTimeout(() => navigation.pop(), 1000)
    console.log('Form data:', formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

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

        {renderQuestion(1, 'A região está próxima a corpos d\'água (rios, lagos, mares)?')}
        {renderQuestion(2, 'Qual o tipo de relevo predominante (plano, colinas, montanhoso)?')}
        {renderQuestion(3, 'O local está em área de preservação ambiental ou de risco geológico?')}
        {renderQuestion(4, 'Houve episódios anteriores de enchentes? Com que frequência?')}
        {renderQuestion(5, 'Houve registros anteriores de deslizamentos de terra?')}
        {renderQuestion(6, 'Qual a frequência de ondas de calor ou seca prolongada na região?')}
        {renderQuestion(7, 'Há sinais de desmatamento ou queimadas recentes?')}
        {renderQuestion(8, 'A área é predominantemente urbana, rural ou mista?')}
        {renderQuestion(9, 'Qual o uso principal do solo? (residencial, industrial, agrícola)')}
        {renderQuestion(10, 'Existem áreas de solo exposto ou erosão visível?')}
        {renderQuestion(11, 'A área possui sistema de drenagem pluvial adequado?')}
        {renderQuestion(12, 'As construções estão em áreas de encosta ou beira de rio?')}
        {renderQuestion(13, 'As ruas têm pavimentação adequada?')}
        {renderQuestion(14, 'Há ocupações irregulares ou construções sem planejamento?')}
        {renderQuestion(15, 'Existe corpo de bombeiros ou defesa civil próxima?')}
        {renderQuestion(16, 'A comunidade já passou por treinamentos ou simulações de evacuação?')}
        {renderQuestion(17, 'Existem rotas de fuga sinalizadas?')}
        {renderQuestion(18, 'A região possui abrigos ou pontos de apoio emergencial?')}
        {renderQuestion(19, 'A população local tem acesso fácil a informações de risco (via SMS, rádio, etc.)?')}
        {renderQuestion(20, 'Há grande número de idosos ou crianças na comunidade?')}
        {renderQuestion(21, 'Há acesso a serviços de saúde próximos?')}
        {renderQuestion(22, 'A maioria das pessoas tem recursos para evacuar em caso de desastre?')}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    paddingBlock: 16,
    paddingInline:10,
    paddingBottom: 32,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#555',
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
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    paddingBlock: 16,
  },
  questionContainer: {
    marginBottom: 12,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    marginRight: 8,
    marginBottom: 8,
  },
  optionButtonSelected: {
    backgroundColor: '#007bff',
  },
  optionText: {
    color: '#007bff',
  },
  optionTextSelected: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 24,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
