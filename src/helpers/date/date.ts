import dayjs from './day';

require('dayjs/locale/ru');

export const dateYYYYMMDDdashHHmmcolon = (date: Date | string = new Date()) =>
    dayjs(date).format('YYYY-MM-DDTHH:mm');

export const dateDDMMYYYYPoint = (date: Date | string = new Date()) => dayjs(date).format('DD.MM.YYYY');

export const dateDDMMYYYYpointHHmmcolon = (date: Date | string = new Date()) =>
    dayjs(date).format('DD.MM.YYYY HH:mm');

export const dateYYYYMMDDBack = (
    date: Date | string | undefined = new Date()
) => dayjs(date).format('YYYY-MM-DD');

export const dateYYYYMMDDHHmmssBack = (
    date: Date | string | undefined = new Date(),
    seconds: number
) => {
    const temp = new Date(date)
    temp.setSeconds(temp.getSeconds() + seconds);

    return dayjs(temp).format('YYYY-MM-DD HH:mm:ss');
};

export const dateDMMMMHHmmLocal = (dateStr: Date | string = new Date()) =>
    `${dayjs(dateStr).locale('ru').format('D MMMM HH:mm')}`;
