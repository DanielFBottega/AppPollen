import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState, useEffect } from 'react';
import moment from 'moment'
import 'moment/locale/pt-br'
import PropTypes from 'prop-types';
import { YStack, XStack, Text, View } from 'tamagui';

LocaleConfig.locales['pt-br'] = {
    monthNames:[
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ],
    monthNamesShort:[
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
    ],
    dayNames:[
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ],
    dayNamesShort:[
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sáb',
    ],
};

LocaleConfig.defaultLocale = 'pt-br';
export default function Calendarstrip({events}) {
    const [selected, setSelected] = useState(moment().format('YYYY-MM-DD'));
    //separar eventos por categoria de horas por exemplo se um evento comçea as 8 e termina as 10, ele pertence a categoria 8horas e a categoria 9horas mas se ele começa as 8 e termina as 9 ele pertence apenas a categoria 8horas
    const [eventsByHour, setEventsByHour] = useState([])
    useEffect(() => {
        const eventsByHour = []
        for(let i = 0; i < 24; i++){
            eventsByHour.push({
                hour: i,
                events: []
            })
        }
        events.forEach((event) => {
            const start = parseInt(event.start.split(':')[0])
            const end = parseInt(event.end.split(':')[0])
            for(let i = start; i <= end; i++){
                eventsByHour[i].events.push(event)
            }
        })
        setEventsByHour(eventsByHour)
    }, [events])
    console.log(eventsByHour)

    return (
        <YStack>
            <Calendar
                theme={{
                    textMonthFontSize: 20,
                    textMonthFontFamily: 'Inter',
                    todayBackgroundColor: '#08A647',
                    todayTextColor: '#FFF',
                }}
                onDayPress={(day) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {
                        textColor: '#08A647',
                    },
                    ...events.reduce((obj, event) => {
                        obj[event.date] = {
                            selected: true,
                            marked: true,
                            selectedDotColor: '#08A647',
                            selectedColor: '#ACCF80',
                        }
                        return obj;
                    }, {})
                }}

            />
            <YStack
                marginTop={20}
            >
                <Text
                    fontSize={18}
                >
                    Agendas do Dia
                </Text>
                {
                    //eventsbyHour tem as categorias de horas e os eventos que pertencem a cada categoria, mostre os eventos em cada categoria se a data selecionada for a mesma do evento, a categoria deve ser um titulo com estilo de risco horizontal e no meio da linha tenha o horario no formato 00h
                    eventsByHour.map((hour) => {
                        //se tiver evento na categoria, verifica se a data selecionada é a mesma do evento, se for mostre o evento
                        if(hour.events.length > 0){
                            if(hour.events[0].date === selected){
                                return (
                                    <YStack
                                        key={hour.hour}
                                        marginTop={10}
                                    >
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                          <View>
                                            <Text style={{width: 50, textAlign: 'center'}}>{hour.hour}hrs</Text>
                                          </View>
                                          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                        </View>
                                        {
                                            hour.events.map((event) => {
                                                if(event.date === selected){
                                                    return (
                                                        <XStack
                                                            key={event.title}
                                                            marginTop={10}
                                                            padding={15}
                                                            backgroundColor='#fff'
                                                            borderRadius={10}
                                                            justifyContent='space-between'
                                                        >
                                                            <Text
                                                                fontSize={16}
                                                            >
                                                                {event.title}
                                                            </Text>
                                                            <Text
                                                                fontSize={14}
                                                                alignSelf='center'
                                                            >
                                                                {event.start} - {event.end}
                                                            </Text>
                                                        </XStack>
                                                    )
                                                }
                                            })
                                        }
                                    </YStack>
                                )
                            }
                        }
                    })
                }

            </YStack>
        </YStack>
    );
}

Calendarstrip.propTypes = {
    events: PropTypes.array,
}