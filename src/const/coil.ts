import {ColumnType} from "./common";

export const COIL_COLUMNS: Record<string, ColumnType> = {
    coilId: {
        label: 'ID',
        name: 'coilId',
        minWidth: '155px',
        maxWidth: '1fr'
    },
    defectsCount: {
        label: 'Кол-во дефектов',
        sortLabel: 'defects_count',
        name: 'defectsCount',
        minWidth: '90px',
        maxWidth: '6fr'
    },
    melting: {
        label: 'Плавка',
        name: 'melting',
        minWidth: '75px',
        maxWidth: '3fr'
    },
    supply: {
        label: 'Партия',
        name: 'supply',
        minWidth: '75px',
        maxWidth: '3fr'
    },
    childrenCount: {
        label: 'Кол-во дочерних рулонов',
        name: 'childrenCount',
        minWidth: '105px',
        maxWidth: '7fr'
    },
    startDate: {
        label: 'Дата начала',
        sortLabel: 'create_time',
        name: 'startDate',
        minWidth: '120px',
        maxWidth: '5fr'
    },
    endDate: {
        label: 'Дата окончания',
        sortLabel: 'end_time',
        name: 'endDate',
        minWidth: '120px',
        maxWidth: '5fr'
    },
    steelGrade: {
        label: 'Марка стали',
        name: 'steelGrade',
        minWidth: '120px',
        maxWidth: '4fr'
    },
    surfaceQuality: {
        label: 'Тип поверхности',
        name: 'surfaceQuality',
        minWidth: '90px',
        maxWidth: '6fr'
    },
    startMetre: {
        label: 'Метр',
        name: 'startMetre',
        minWidth: '75px',
        maxWidth: '2fr'
    },
    id: {
        label: 'ID (БД)',
        name: 'id',
        minWidth: '50px',
        maxWidth: '1fr'
        // isHide: true
    },
    mode: {
        label: 'Режим',
        name: 'mode',
        minWidth: '70px',
        maxWidth: '1fr'
    }
};
