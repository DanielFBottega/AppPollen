import {useState, useEffect} from 'react';
import {
    View,
    XStack,
    YStack,
    Text,
    Button,
    ScrollView,
} from 'tamagui'
import { Check as CheckIcon, X, ArrowLeft } from '@tamagui/lucide-icons'
import {Modal} from 'react-native'
import moment from 'moment'
import ModalReuniao from './modalReuniao';
import { GradientBackground } from './Themed';

export default function ModalFloor({floor, onClose}) {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const eventos = {};
        const hoje = moment().format('YYYY-MM-DD');
        const amanha = moment().add(1, 'day').format('YYYY-MM-DD');
        eventos[hoje] = [];
        eventos[amanha] = [];
        eventos[hoje].push(
            {
                date: hoje,
                start: '10:00',
                end: '12:00',
                empresa: 'Dimo',
            },
            {
                date: hoje,
                start: '14:00',
                end: '16:00',
                empresa: 'Demo',
            },
            {
                date: hoje,
                start: '16:00',
                end: '18:00',
                empresa: 'Dimo',
            }
        );
        eventos[amanha].push(
            {
                date: amanha,
                start: '18:00',
                end: '20:00',
                empresa: 'Dimo',
            },
            {
                date: amanha,
                start: '20:00',
                end: '22:00',
                empresa: 'Dimo',
            },
            {
                date: amanha,
                start: '10:00',
                end: '12:00',
                empresa: 'Dimo',
            }
        );
        setEvents(eventos);
    }, []);

    return(
        <View>
            <Modal
                visible={true}
                animationType='slide'
                transparent={true}
                onRequestClose={() => {
                    onClose()
                }}

            >
                <ScrollView
                    f={1}
                    backgroundColor={'#f2f2f2'}
                    showsVerticalScrollIndicator={false}
                >
                    {/* cabeçalho com seta de voltar que fecha o modal */}
                    <XStack
                        justifyContent='space-between'
                        width={'100%'}
                        borderRadius={10}
                        padding={10}
                        marginTop={10}
                    >
                        <YStack
                            onPress={() => {
                                onClose()
                            }}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <ArrowLeft
                                size={30}
                                color={'#08A647'}
                            />
                        </YStack>
                        <YStack>
                            <Text
                                alignSelf='center'
                                justifyContent='center'
                                fontFamily={'Inter'}
                                fontSize={24}
                            >
                                {floor}
                            </Text>
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
                    {/* corpo com lista de eventos separado por data */}
                    <YStack
                        marginTop={10}
                        padding={10}
                        borderRadius={10}
                    >
                        {
                            Object.keys(events).map((date, i) => (
                                <YStack
                                    key={i}
                                    marginTop={10}
                                    padding={10}
                                    borderRadius={10}
                                    gap={10}
                                >
                                    <Text
                                        fontFamily={'InterThin'}
                                        fontSize={18}
                                    >
                                        {moment(date).format('DD [de] MMMM')}
                                    </Text>
                                    {
                                        events[date].map((event, i) => (
                                            <XStack
                                                key={i}
                                                justifyContent='space-between'
                                                backgroundColor={'#fff'}
                                                borderRadius={10}
                                                padding={20}
                                            >
                                                <YStack>
                                                    <Text
                                                        fontFamily={'Inter'}
                                                        fontSize={18}
                                                    >
                                                        {event.empresa}
                                                    </Text>
                                                </YStack>
                                                <YStack>
                                                    <Text
                                                        fontFamily={'InterThin'}
                                                        fontSize={18}
                                                    >
                                                        {event.start} ás {event.end}
                                                    </Text>
                                                </YStack>
                                            </XStack>
                                        ))
                                    }
                                </YStack>
                            ))
                        }
                    </YStack>
                </ScrollView>
            </Modal>
        </View>
    )
}
