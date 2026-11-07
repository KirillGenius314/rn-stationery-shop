import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { usePreventScreenCapture } from 'expo-screen-capture';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const Autorization = () => {
  usePreventScreenCapture();
  const navigation = useNavigation<Nav>();
  const [login, setLogin] = useState('');        
  const [password, setPassword] = useState('');

  return (
    <View style={styles.center}>
      <Text style={{ fontSize: 24 }}>Авторизация</Text>

      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={login}                       
        onChangeText={setLogin}                  
        autoCorrect={false}
        autoCapitalize="none"
      />

      <TextInput
        style={[styles.input, { marginTop: 10 }]}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={{ fontSize: 12 }}>логин: abc, пароль: 123</Text>

      <Pressable
        style={styles.button1}
        onPress={() => {
          if (login === 'abc' && password === '123') {
            navigation.replace('DrugList');
          
          } else {

              if (Platform.OS === 'web') {
                window.alert("Неверный логин или пароль");
              } else {

                Alert.alert("Неверный логин или пароль");
              }
          }
          
        }}
      >
        <Text style={{ color: 'white' }}>Войти</Text>
      </Pressable>

      <Pressable style={styles.button2} onPress={() => {}} >
        <Text style={{ color: 'white' }}>Войти через github</Text>
      </Pressable>

      
    </View>
  );
};

export default Autorization;


const styles = StyleSheet.create({
  button1: { backgroundColor: 'blue', marginTop: 30, width: 100, height: 50,   alignItems: 'center', justifyContent: 'center', },

  button2: { backgroundColor: 'blue', marginTop: 30, width: 150, height: 50,   alignItems: 'center', justifyContent: 'center', },

  center: { paddingTop: 20, alignItems: 'center' },

  input: {
    marginTop: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  

});