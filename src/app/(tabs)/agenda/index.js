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
  import { ModalConfig } from '@components/agendaConfig.js';
  export default function Agenda() {
    const [events, setEvents] = useState([])

    //setar eventos fake
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
        <XStack
          justifyContent='space-between'
        >
          <LateralMenu />
          <ModalConfig />
        </XStack>
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
      </ScrollView>
    );
  }
  
  