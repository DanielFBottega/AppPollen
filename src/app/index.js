import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,  View, Image, SafeAreaView } from 'react-native';
import Logo from '../../assets/MARCAPOLLEN.png';
import {GradientBackground, Button} from '@components/Themed';
import { Form, Text, Input} from 'tamagui';
import * as Linking from 'expo-linking';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View>
      <GradientBackground style={styles.header}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.title}> Faça seu login abaixo</Text>
      </GradientBackground>
      <SafeAreaView>
        <Form
          alignItems='center'
          f={1}
          m={10}
        >
          <View style={styles.user}>
          <Text
              color='black'
            >Usuário</Text>
            <Input
              backgroundColor='white'
              color={'black'}
              value={user.value}
              onChange={e => setUser(e)}
              type="text"
            />
          </View>
          <View style={styles.password}>
            <Text
              color='black'
            >Senha</Text>
            <Input
              // style={styles.userInput}
              backgroundColor='white'
              color={'black'}
              value={password.value}
              onChange={e => setPassword(e)}
              type="password"
              secureTextEntry={true}
            />
          </View>
          <Text
            color='black'
            alignSelf='flex-end'
          >esqueceu sua senha?</Text>
          <Form.Trigger asChild>
            <Button
              marginTop={60}
              onPress={() =>  {
                console.log('teste');
                Linking.openURL('/home');
              }}
            >
              <Button.Text>Entrar</Button.Text>
            </Button>
          </Form.Trigger>
        </Form>
      </SafeAreaView>
      <Text
      alignItems='center'
      alignSelf='center'
      color="black"
      position='fixed'
      bottom={20}
      >Ainda não tem uma conta? <Text color='#08A647'>Cadastre-se</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    height: '30vh',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title:{
    color: '#fff',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 50,
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
