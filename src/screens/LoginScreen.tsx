import React, { useState } from "react";
import styles from "../styles";
import { client } from "../api/client";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthResponseData, AuthStackParamList, FormDataLogin } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";

const LoginScreen = ({navigation}: NativeStackScreenProps<AuthStackParamList, "LoginScreen">) => {

  const { login, setToken } = useAuth();

  const [formData, setFormData] = useState<FormDataLogin>({
    email: "",
    senha: "",
  });

  const [esqueciSenha, setEsqueciSenha] = useState(false);

  const handlerOnChange = (name: keyof FormDataLogin, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmmit = async () => {
    login();
    try {
      const response = await client.post<AuthResponseData>("/auth/login", {
        username: formData.email,
        password: formData.senha,
      });

      if (response.status === 200) {
        login();
      } else {
        Alert.alert("Credenciais inválidas!");
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({ email: "", senha: "" });
  };

  const handleGoToRegister = () => {
    navigation.push("RegisterScreen");
  };

  const toggleEsqueciSenha = () => {
    setEsqueciSenha(!esqueciSenha);
    if (esqueciSenha != true) {
      navigation.push("RecoveryScreen");
    }
    setEsqueciSenha(false);
  };

  return (
    <LinearGradient colors={["#00AEEF", "#0077BE"]} style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
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

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={toggleEsqueciSenha}
      >
        <View style={styles.checkbox}>
          {esqueciSenha && (
            <Ionicons name="checkmark-circle" size={20} color="#fff" />
          )}
          {!esqueciSenha && <View style={styles.checkboxCircle} />}
        </View>
        <Text style={styles.checkboxLabel}>Esqueci a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlerSubmmit} style={styles.buttonWrapper}>
        <LinearGradient
          colors={["#4FC3F7", "#00B0FF"]}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={handleGoToRegister}>
        <Text style={styles.linkText}>
          Não tem uma conta?{" "}
          <Text style={styles.linkTextBold}>Cadastre-se aqui!</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;