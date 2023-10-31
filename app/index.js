import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import Logo from '../assets/MARCAPOLLEN.png';
import {GradientBackground, Button} from '../components/Themed';


export default function Login() {
  const [user, onChangeUser] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View>
      <GradientBackground style={styles.header}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.title}> Faça seu login abaixo</Text>
      </GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.user}>
          <Text style={styles.labelInput}>Usuário</Text>
          <TextInput
            style={styles.userInput}
            value={user.value}
            onChange={onChangeUser}
            type="text"
          />
        </View>
        <View style={styles.password}>
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput
            style={styles.userInput}
            value={password.value}
            onChange={onChangePassword}
            type="password"
            secureTextEntry={true}
          />
        </View>
        <Text style={{alignSelf: 'flex-end', marginRight: 15, marginTop: 5,}}>esqueceu sua senha?</Text>
        <Button style={{marginTop: 80, borderRadius: 10, width: '90%'}}>
          <Text style={{fontSize: 20}}>Entrar</Text>
        </Button>
      </SafeAreaView>
      <Text style={{alignSelf: 'center', marginTop: 20,}}>Ainda não tem uma conta? </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    },
  header:{
    height: '30vh',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title:{
    color: '#fff',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 10,
  },
  image:{
    width: 277,
    height: 83,
    alignSelf: 'center',
    marginTop: 70,
  },
  user:{
    marginTop: 50,
    width: '100%',
  },
  password:{
    width: '100%',
    marginTop: 20,
  },
  userInput:{
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  labelInput:{
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 15,
  },
});
