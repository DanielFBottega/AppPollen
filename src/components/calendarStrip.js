import CalendarStrip from 'react-native-calendar-strip';
import 'moment'
import 'moment/locale/pt-br'
import PropTypes from 'prop-types';

const locale = {
    name : 'pt-br',
    config: {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Dom_Seg_ter_Qua_Qui_Sex_Sáb'.split('_'),
    }
}



export default function Calendarstrip({events}) {
    return (
        <CalendarStrip
            style={{
                padding: 15,
                backgroundColor: 'white',

            }}
            scrollable
            startingDate={new Date()}
            selectedDate={new Date()}
            showMonth={false}
            showMonthArrow={false}
            iconLeftStyle={{
                    display: 'none',
                }}
            iconRightStyle={{
                    display: 'none',
                }}
            numDaysInWeek={5}
            //style de cada dia
            dayContainerStyle={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#08A647',
            }}
            highlightDateContainerStyle={{
                backgroundColor: '#08A647',
            }}
            highlightDateNumberStyle={{
                color: 'white',
            }}
            highlightDateNameStyle={{
                color: 'white',
            }}
            // datas em português
            locale={locale}
            //marcar datas e events
            markedDates={events}
            markedDatesStyle={{
                borderRadius: 10,
            }}
            />
    );
}

Calendarstrip.propTypes = {
    events: PropTypes.array,
}