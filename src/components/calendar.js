import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from 'react';
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
    return (
        <YStack>
            <Calendar
                theme={{
                    textMonthFontSize: 20,
                    textMonthFontFamily: 'Inter',
                    selectedDayTextColor: '#FFF',
                    selectedDayBackgroundColor: '#08A647',
                }}
                onDayPress={(day) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {
                        selected: true,
                        disableTouchEvent: true,
                    },
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