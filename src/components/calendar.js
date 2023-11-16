import { Calendar } from 'react-native-calendars';
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
        <Calendar
            
            />
    );
}

Calendarstrip.propTypes = {
    events: PropTypes.array,
}