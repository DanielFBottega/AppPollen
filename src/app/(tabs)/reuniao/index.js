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
import { Plus} from '@tamagui/lucide-icons'
import * as Linking from 'expo-linking';
import { GradientBackground } from '@components/Themed';
import { useState, useEffect } from 'react';
import moment from 'moment';
import LateralMenu from '@components/lateralMenu.js';


export default function Reuniao() {
  const [events, setEvents] = useState([])

  //setar eventos fake
  useEffect(() => {
      const eventos = []
      const date = moment().format('YYYY-MM-DD')
      eventos.push({
          date: date,
          start: '10:00',
          end: '12:00',
          empresa: 'Dimo',
          sala: '1º/Mezanino'
      },
      {
          date: date,
          start: '14:00',
          end: '16:00',
          empresa: 'Demo',
          sala: '1º/Mezanino'
      },
      {
          date: date,
          start: '16:00',
          end: '18:00',
          empresa: 'Dimo',
          sala: '3º Andar'
      },
      {
          date: date,
          start: '18:00',
          end: '20:00',
          empresa: 'Demo',
          sala: '3º Andar'
      },
      {
          date: date,
          start: '20:00',
          end: '22:00',
          empresa: 'Dimo',
          sala: '4º Andar'
      },
      {
          date: date,
          start: '22:00',
          end: '23:00',
          empresa: 'Demo',
          sala: '4º Andar'
      }
      )
      setEvents(eventos)
  },[])

  return (
    <YStack>
      {/* inicio cabeçalho */}
      <YStack
      marginTop={10}
      >
        <XStack
          justifyContent='space-between'
          // width={'97%'}
        >
          <YStack>
            <Text
              fontSize={24}
            >Salas de Reunião</Text>
          </YStack>
          <YStack>
            <GradientBackground
              style={{
                width: 30,
                height: '100%',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10
              }}
            >
            <Plus
              color='#fff'
              borderRadius={5}
              size={30}
            />
            </GradientBackground>
          </YStack>
        </XStack>
      </YStack>
      {/* fim cabeçalho */}
      {/* inicio salas de reuniao */}
      <YStack
        justifyContent='space-evenly'
        marginTop={30}
      >
          <XStack
            justifyContent='space-between'
            backgroundColor={'#fff'}
            borderRadius={10}
            padding={10}
          >
            <Text
              alignSelf='center'
            >
              1º/Mezanino
            </Text>
            <Plus
              color='#fff'
              backgroundColor='#08A647'
              borderRadius={5}
              size={30}
            />
          </XStack>
          <XStack
            justifyContent='space-between'
            backgroundColor={'#fff'}
            borderRadius={10}
            padding={10}
            marginTop={15}
          >
            <Text
              alignSelf='center'
            >
              3º Andar
            </Text>
            <Plus
              color='#fff'
              backgroundColor='#08A647'
              borderRadius={5}
              size={30}
            />
          </XStack>
          <XStack
            justifyContent='space-between'
            backgroundColor={'#fff'}
            borderRadius={10}
            padding={10}
            marginTop={15}
          >
            <Text
              alignSelf='center'
            >
              4º Andar
            </Text>
            <Plus
              color='#fff'
              backgroundColor='#08A647'
              borderRadius={5}
              size={30}
            />
          </XStack>
          <XStack
            justifyContent='space-between'
            backgroundColor={'#fff'}
            borderRadius={10}
            padding={10}
            marginTop={15}
          >
            <Text
              alignSelf='center'
            >
              5º/Ático
            </Text>
            <Plus
              color='#fff'
              backgroundColor='#08A647'
              borderRadius={5}
              size={30}
            />
          </XStack>
          <XStack
            justifyContent='space-between'
            backgroundColor={'#fff'}
            borderRadius={10}
            padding={10}
            marginTop={15}
          >
            <Text
              alignSelf='center'
            >
              Auditório
            </Text>
            <Plus
              color='#fff'
              backgroundColor='#08A647'
              borderRadius={5}
              size={30}
            />
          </XStack>
      </YStack>
      {/* fim salas de reuniao */}
      {/* inicio reunioes hoje */}
      <YStack
        marginTop={20}
        justifyContent='space-between'
      >
        <Text
          fontSize={20}
        >Hoje - {moment().format('DD/MM')}</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          maxHeight={260}
          marginTop={10}
        >
        {
          // separar por sala de reuniao cada uma com seu GradientBackground
          events.map((event, index) => {
            return(
              <XStack
                key={index}
                justifyContent='space-between'
                backgroundColor={'#fff'}
                borderRadius={10}
                padding={10}
                marginTop={15}
              >
                <YStack>
                  <Text
                    alignSelf='center'
                  >
                    {event.start} - {event.end}
                  </Text>
                  <Text
                    alignSelf='center'
                  >
                    {event.empresa}
                  </Text>
                </YStack>
                <YStack>
                  <Text
                    alignSelf='center'
                  >
                    {event.sala}
                  </Text>
                </YStack>
              </XStack>
            )
          })
        }
      </ScrollView>
      </YStack>
    </YStack>
  );
}

