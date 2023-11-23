import {
  XStack,
  YStack,
  Text,
  Image,
  Avatar,
  View,
  ScrollView,
  Anchor
} from 'tamagui';
import * as Linking from 'expo-linking';
import { useState, useEffect } from 'react';
import moment from 'moment';
import LateralMenu from '@components/lateralMenu.js';
export default function Noticias() {
  const [events, setEvents] = useState([])

  //setar eventos fake
  useEffect(() => {
      const eventos = []
      for(let i = 0; i < 15; i++){
          const date = moment().add(i, 'days').format('YYYY-MM-DD')
          if(i % 2){
              eventos.push({
                  date: date,
                  start: '08:00',
                  end: '12:00',
                  title: 'Evento ' + i,
                  description: 'Descrição do evento',
                  location: 'Local do evento',
                  dots: [{
                      color: 'darkgreen',
                      key: date
                  }]
              },
              {
                  date: date,
                  start: '14:00',
                  end: '18:00',
                  title: 'Evento ' + i + ' parte 2',
                  description: 'Descrição do evento',
                  location: 'Local do evento',
                  dots: [{
                      color: 'darkgreen',
                      key: date
                  }]
              }
              )
          }
      }
      setEvents(eventos)
  },[])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {/* inicio cabeçalho */}
      <YStack
      marginTop={10}
      >
        <XStack
          justifyContent='space-between'
        >
          <YStack>
            <Text
              fontSize={24}
            >Notícias e Editais</Text>
          </YStack>
        </XStack>
      </YStack>
      {/* fim cabeçalho */}
      {/* inicio noticias */}
      <YStack
        justifyContent='space-evenly'
        marginTop={20}
        marginBottom={60}
      >
        { events.length > 0 ? events.map((event, index) => {
            return (
              <XStack
                key={index}
                backgroundColor={'white'}
                borderRadius={10}
                marginTop={10}
              >
                <View
                  marginRight={10}
                >
                  <Image
                  src="http://placekitten.com/300/300"
                  width={100}
                  height={100}
                  borderRadius={10}
                  />
                </View>
                <YStack
                  justifyContent='space-around'
                >
                  <Text
                  fontSize={12}
                  marginTop={10}
                  >{event.description}</Text>
                  {/* link com texto confia a materia */}
                  <Anchor
                  href={'/noticias'}
                  >
                    <Text
                    fontFamily={'InterThin'}
                    fontSize={12}
                    marginTop={10}
                    >Confira a matéria</Text>
                  </Anchor>
                </YStack>
              </XStack>
            )
        }) : (
            <XStack
                justifyContent='center'
                alignItems='center'
                marginBottom={20}
                padding={20}
                borderRadius={10}
                backgroundColor='white'
                shadowColor='black'
                shadowOpacity={0.2}
                shadowRadius={10}
                shadowOffset={{
                    width: 0,
                    height: 0
                }}
            >
                <YStack>
                    <Text
                        fontSize={16}
                        fontWeight='bold'
                    >Nenhum evento encontrado</Text>
                </YStack>
            </XStack>
        )
        }
      </YStack>
      {/* fim noticias */}
    </ScrollView>
  );
}

