import {
  XStack,
  YStack,
  Text,
  Image,
  Avatar,
  View,
  ScrollView
} from 'tamagui';
import * as Linking from 'expo-linking';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Calendarstrip from '@components/calendarStrip.js';



export default function Home() {
  const nome = 'Pedrinho Matador';
  const empresa = 'PCC';
  const [events, setEvents] = useState([])

  //setar eventos fake aqui
  useEffect(() => {
      const eventos = []
      for(let i = 0; i < 5; i++){
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
              })
          }
      }
      setEvents(eventos)
  },[])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {/* inicio cabeçalho */}
      <YStack>
        <Image source={require('@assets/List.svg')} />
      </YStack>
      <YStack
      marginTop={10}
      >
        <XStack
          justifyContent='space-between'
        >
          <YStack>
            <Text
            fontFamily={'InterBold'}
            >Olá, {nome}</Text>
            <Text
            fontFamily={'InterThin'}
            >{empresa}</Text>
          </YStack>
          <Avatar circular size="$5"
            borderWidth={3}
            borderColor={'#08A647'}
          >
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc={'#08A647'} />
          </Avatar>
        </XStack>
      </YStack>
      {/* fim cabeçalho */}
      {/* inicio cards */}
      <XStack
        justifyContent='space-evenly'
        marginTop={30}
      >
          <YStack
            backgroundColor={'white'}
            width={100}
            padding={10}
            height={95}
            justifyContent='space-between'
            borderRadius={10}
            onPress={() =>  {
              Linking.openURL('/reuniao');
            }}
          >
          <View
            justifyContent='center'
            backgroundColor={'#08A647'}
            width={40}
            borderRadius={5}

          >
            <Image
            source={require('@assets/Reunião.svg')}
            tintColor={'#FFF'}
            />
          </View>
          <Text
            fontFamily={'InterThin'}
            fontSize={14}
          >Salas de Reunião</Text>
          </YStack>
          <YStack
            backgroundColor={'white'}
            width={100}
            padding={10}
            justifyContent='space-between'
            borderRadius={10}
            onPress={() =>  {
              Linking.openURL('/noticias');
            }}
          >
          <View
          justifyContent='center'
          backgroundColor={'#08A647'}
          width={40}
          borderRadius={5}
          >
            <Image
            source={require('@assets/News.svg')}
            tintColor={'#FFF'}
            />
          </View>
          <Text
            fontFamily={'InterThin'}
            fontSize={14}
          >Notícias</Text>
          </YStack>
          <YStack
            backgroundColor={'white'}
            width={100}
            padding={10}
            justifyContent='space-between'
            borderRadius={10}
          >
          <View
          justifyContent='center'
          backgroundColor={'#08A647'}
          width={40}
          borderRadius={5}
          >
            <Image
            source={require('@assets/Reunião.svg')}
            tintColor={'#FFF'}
            />
          </View>
          <Text
            fontFamily={'InterThin'}
            fontSize={14}
          >Eventos</Text>
          </YStack>
      </XStack>
      {/* fim cards */}
      {/* inicio agenda */}
      <YStack>
        <XStack
          marginTop={30}
          marginBottom={10}
          justifyContent='space-between'
          f={1}
          alignItems='center'
        >
          <Text>Agenda</Text>
          <Text
          color={'#08A647'}
          fontSize={12}
          >Ver tudo</Text>
        </XStack>
        <Calendarstrip events={events}/>
      </YStack>
      {/* fim agenda */}
      {/* inicio eventos */}
      <YStack
      marginTop={20}
      >
        <Text>Próximos Eventos</Text>
        <Text
         fontFamily={'InterThin'}
         marginTop={5}
         >
          {
            events.length ? moment(events[0].date).locale('pt-br').format('DD [de] MMMM') : 'Nenhum evento próximo'
          }
        </Text>
        <View
          marginTop={10}
          padding={10}
          {...events.length ? {backgroundColor: 'white'} : null}
          height={100}
        >
          {/* mostrar o primeiro evento aqui */}
          {
            events.length ? (
              <YStack>
                  <Text
                  fontFamily={'InterBold'}
                  fontSize={16}
                  >{events[0].title}</Text>
                  <Text
                  fontFamily={'InterThin'}
                  fontSize={12}
                  marginTop={10}
                  >{events[0].description}</Text>
                  <Text
                  fontFamily={'InterThin'}
                  fontSize={12}
                  marginTop={10}
                  >{events[0].start} às {events[0].end}</Text>
                  <Text
                  fontFamily={'InterThin'}
                  fontSize={12}
                  marginTop={10}
                  >{events[0].location}</Text>
              </YStack>
            ) : null
          }
        </View>
      </YStack>
      {/* fim eventos */}
      {/* inicio ultimas noticias */}
      <YStack
      marginTop={20}
      >
        <Text>Últimas Notícias</Text>
        <View
          marginTop={10}
          padding={10}
          {...events.length ? {backgroundColor: 'white'} : null}
          height={100}
        >
          {/* mostrar o primeiro evento aqui */}
          {
            events.length ? (
              <YStack>
                  <Text
                  fontFamily={'InterBold'}
                  fontSize={16}
                  >{events[0].title}</Text>
                  <Text
                  fontFamily={'InterThin'}
                  fontSize={12}
                  marginTop={10}
                  >{events[0].description}</Text>
                  <Text
                  fontFamily={'InterThin'}
                  fontSize={12}
                  marginTop={10}
                  >{events[0].start} às {events[0].end}</Text>
                  <Text
                  fontFamily={'InterThin'}
                  fontSize={12}
                  marginTop={10}
                  >{events[0].location}</Text>
              </YStack>
            ) : null
          }
        </View>
      </YStack>
      {/* fim ultimas noticias */}
    </ScrollView>
  );
}

