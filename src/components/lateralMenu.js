import React, { useState } from 'react';
import {TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { View, Text, Image, YStack, XStack, Avatar } from 'tamagui';
import { GradientBackground } from './Themed';
import { useNavigation } from '@react-navigation/native';

const LateralMenu = ({props}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();
  const nome = 'Reginaldo Cigarro';
  const empresa = 'MarkHouse';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
    closeMenu();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        <Image source={require('@assets/List.svg')} />
      </TouchableOpacity>

      {/* Menu lateral que se sobreporá à tela */}
      {isMenuOpen && (
        <TouchableWithoutFeedback onPress={closeMenu}>
        <View
          style={{
            position: 'absolute',
            top: -10,
            left: -10,
            width: '110%',
            height: 1000,
            backgroundColor: 'RGBA(0,0,0,0.5)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
            {/* Links para outras telas */}
            <GradientBackground
              style={{
                width: '50%',
               }}
            >
            <YStack
              padding={20}
              justifyContent='center'
              alignItems='center'
            >
              <Avatar circular size="$8"
              borderWidth={3}
              borderColor={'#08A647'}
              >
                <Avatar.Image src="http://placekitten.com/500/500" />
                <Avatar.Fallback bc={'#08A647'} />
              </Avatar>
              <Text
                color={'white'}
                fontFamily={'Inter'}
                marginTop={10}
              >{nome}</Text>
              <Text
                color={'white'}
                fontFamily={'InterThin'}
                marginTop={5}
              >{empresa}</Text>
            </YStack>
            <YStack padding={10} gap={15}>
              <TouchableOpacity
                onPress={() => navigateTo('home/index')}
              >
                <XStack>
                <Image
                  src={require('@assets/House.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Início</Text>
                </XStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('agenda/index')}
              >
                <XStack>
                <Image
                  src={require('@assets/Calendar.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Agenda</Text>
                </XStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('reuniao/index')}
              >
                <XStack>
                <Image
                  src={require('@assets/Reunião.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Salas de Reuniao</Text>
                </XStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('noticias/index')}
              >
                <XStack>
                <Image
                  src={require('@assets/News.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Notícias</Text>
                </XStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('configuracao/index')}
              >
                <XStack>
                <Image
                  src={require('@assets/Settings.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Configurações</Text>
                </XStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('termos/index')}
              >
                <XStack>
                <Image
                  src={require('@assets/House.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Termos de uso</Text>
                </XStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('/')}
              >
                <XStack>
                <Image
                  src={require('@assets/House.svg')}
                  tintColor='white'
                />
                <Text
                  alignSelf='center'
                  color={'white'}
                  fontFamily={'InterThin'}
                  marginLeft={5}
                >Sair</Text>
                </XStack>
              </TouchableOpacity>

              {/* Adicione mais links conforme necessário */}
            </YStack>
            </GradientBackground>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default LateralMenu;
