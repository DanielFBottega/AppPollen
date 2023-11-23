import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState, useEffect } from 'react';
import moment from 'moment'
import 'moment/locale/pt-br'
import PropTypes from 'prop-types';
import { YStack, XStack, Text } from 'tamagui';

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
                {events.length > 0 ? events.map((event) => {
                    if(event.date === selected){

                        return (
                            <XStack
                                key={event.title + event.date}
                                marginTop={10}
                                padding={10}
                                justifyContent='space-between'
                                borderRadius={10}
                                backgroundColor={'#FFF'}
                            >
                                <Text
                                    fontFamily={'InterBold'}
                                    fontSize={16}
                                >
                                    {event.title}
                                </Text>
                                <Text
                                    fontFamily={'InterThin'}
                                    fontSize={16}
                                >
                                    {event.start} às {event.end}
                                </Text>
                            </XStack>
                        )
                    }
                }) : <Text>Sem informação de Eventos</Text>} 

            </YStack>
        </YStack>
    );
}

Calendarstrip.propTypes = {
    events: PropTypes.array,
}