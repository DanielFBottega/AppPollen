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
  import Calendar from '@components/calendar.js';
  import LateralMenu from '@components/lateralMenu.js';

  export default function Home() {
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
        <LateralMenu />
        <YStack
        marginTop={10}
        >
          <XStack
            justifyContent='space-between'
          >
            <YStack>
              <Text 
                fontSize={24}
              >Agenda</Text>
            </YStack>
          </XStack>
        </YStack>
        {/* fim cabeçalho */}
        {/* inicio agenda */}
        <YStack
          justifyContent='space-evenly'
          marginTop={30}
        >
            <Calendar events={events}/>
        </YStack>
        {/* fim agenda */}
        {/* inicio eventos */}
        <YStack
        marginTop={20}
        >
          <Text>Agenda do dia</Text>
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
            borderRadius={10}
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
      </ScrollView>
    );
  }
  
  