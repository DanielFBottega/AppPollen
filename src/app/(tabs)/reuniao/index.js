import {
  XStack,
  YStack,
  Text,
  ScrollView,
} from 'tamagui';
import { Plus} from '@tamagui/lucide-icons'
import { GradientBackground } from '@components/Themed';
import { useState, useEffect } from 'react';
import moment from 'moment';
import ModalReuniao from '@components/modalReuniao';
import ModalFloor from '@components/modalFloor';

export default function Reuniao() {
  const [events, setEvents] = useState([])
  const [eventsByFloor, setEventsByFloor] = useState([[]])

  useEffect(() => {
    const eventsByFloor = [[],[],[],[],[]]
    events.forEach((event) => {
      if(event.sala === '1º /Mezanino'){
        eventsByFloor[0].push(event)
      }else if(event.sala === '3º Andar'){
        eventsByFloor[1].push(event)
      }else if(event.sala === '4º Andar'){
        eventsByFloor[2].push(event)
      }else if(event.sala === '5º/Ático'){
        eventsByFloor[3].push(event)
      }else if(event.sala === 'Auditório'){
        eventsByFloor[4].push(event)
      }
    })
    setEventsByFloor(eventsByFloor)
  },[events])

  //setar eventos fake
  useEffect(() => {
      const eventos = []
      const date = moment().format('YYYY-MM-DD')
      eventos.push({
          date: date,
          start: '10:00',
          end: '12:00',
          empresa: 'Dimo',
          sala: '1º /Mezanino'
      },
      {
          date: date,
          start: '14:00',
          end: '16:00',
          empresa: 'Demo',
          sala: '1º /Mezanino'
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
          sala: '3º Andar'
      },
      {
          date: date,
          start: '22:00',
          end: '23:00',
          empresa: 'Demo',
          sala: '3º Andar'
      }
      )
      setEvents(eventos)
  },[])

  const [open, setOpen] = useState(false)
  const [floor, setFloor] = useState('')
  const handleOpen = (floor) => {
    setOpen(true)
    // floor com dados de eventos daquel andar
    setFloor(floor)
  }

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
              <ModalReuniao />
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
        {open && <ModalFloor floor={floor} onClose={()=> setOpen(false)} /> }
        <XStack
            justifyContent='space-between'
            backgroundColor={'#fff'}
            borderRadius={10}
            padding={10}
          >
            <Text
              alignSelf='center'
              onPress={() => handleOpen('1º /Mezanino')}
            >
              1º/Mezanino
            </Text>
            <YStack
              backgroundColor={'#08A647'}
              borderRadius={5}
            >
              <ModalReuniao
                sala={'1º /Mezanino'}
              />
          </YStack>
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
              onPress={() => handleOpen('3º Andar')}
            >
              3º Andar
            </Text>
            <YStack
              backgroundColor={'#08A647'}
              borderRadius={5}
            >
              <ModalReuniao
                sala={'3º Andar'}
              />
          </YStack>
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
              onPress={() => handleOpen('4º Andar')}
            >
              4º Andar
            </Text>
            <YStack
              backgroundColor={'#08A647'}
              borderRadius={5}
            >
              <ModalReuniao
                sala={'4º Andar'}
              />
          </YStack>
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
              onPress={() => handleOpen('5º Andar')}
            >
              5º/Ático
            </Text>
            <YStack
              backgroundColor={'#08A647'}
              borderRadius={5}
            >
              <ModalReuniao
                sala={'5º/Ático'}
              />
          </YStack>
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
              onPress={() => handleOpen('Auditório')}
            >
              Auditório
            </Text>
            <YStack
              backgroundColor={'#08A647'}
              borderRadius={5}
            >
              <ModalReuniao
                sala={'Auditório'}
              />
          </YStack>
          </XStack>
      </YStack>
      {/* fim salas de reuniao */}
      {/* inicio reunioes hoje */}
      <YStack
        marginTop={20}
      >
        <Text
          fontSize={20}
        >Hoje - {moment().format('DD/MM')}</Text>
        <YStack
          marginBottom={60}
        >
        {
          eventsByFloor.map((floor, index) => {
            if(floor.length > 0){
              return (
                <GradientBackground
                key={index}
                  style={{
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                    width: '97%',
                    height: 150
                  }}
                >
                <XStack
                  key={index}
                  justifyContent='space-between'
                  height={150}
                  padding={10}
                >
                  <Text
                    alignSelf='center'
                    color={'#fff'}
                    fontSize={70}
                  >
                    {/* somente o numero do andar */}
                    {floor[0].sala.split(' ')[0]}
                  </Text>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                  >
                  <YStack
                    gap={5}
                  >
                  {
                    floor.map((event,index) => {
                      return (
                        <XStack
                          key={index}
                          marginLeft={10}
                          padding={10}
                          backgroundColor='rgba(255,255,255,0.5)'
                          borderRadius={10}
                          justifyContent='space-between'
                        >
                          <Text
                            fontSize={16}
                          >
                            {event.empresa}
                          </Text>
                          <Text
                            fontSize={14}
                            alignSelf='center'
                          >
                            {event.start} - {event.end}
                          </Text>
                        </XStack>
                      )
                    })
                  }
                  </YStack>
                  </ScrollView>
                </XStack>
                </GradientBackground>
              )
            }
          })
        }
        </YStack>
      </YStack>
    </ScrollView>
  );
}

