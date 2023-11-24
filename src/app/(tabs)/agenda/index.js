import {
    XStack,
    YStack,
    Text,
    ScrollView,
  } from 'tamagui';
  import { useState, useEffect } from 'react';
  import moment from 'moment';
  import Calendar from '@components/calendar.js';
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
                    end: '09:00',
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
                    start: '08:00',
                    end: '10:00',
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
        marginBottom={60}
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
  
  