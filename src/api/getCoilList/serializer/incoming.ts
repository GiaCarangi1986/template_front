import {DateFormatters, Utils} from "../../../helpers";

type CoilDataGettingType = {
    id: number;
    ims_coil_id: string;
    melting: string;
    supply: string;
    create_time: Date;
    end_time: Date;
    grade: string;
    surface_quality: string;
    defects_count: number;
    parent_coil_id: null | number;
    size: {
        width: number;
        startx: number;
        endx: number;
    };
    is_parent: boolean;
    childs: CoilDataGettingType[];
};

type CoilListGettingType = {
    count: number;
    next: string;
    previous: string;
    results: CoilDataGettingType[];
};

enum CoilRole {
    parent = 'parent',
    child = 'child'
}

type CoilType = {
    id: number;
    rollId: string;
    defectsCount: number;
    melting: string;
    supply: string;
    startDate: string;
    endDate: string | undefined;
    steelGrade: string;
    surfaceQuality: string;
    children: CoilType[];
    startMetre: number | undefined;
    type: keyof typeof CoilRole;
    parentId: null | number;
    mode: string;
}

type CoilListType = {
    data: CoilType[];
    isNext: boolean;
    count: number;
};

export const coilGettingSerializer = (gettingCoil: CoilDataGettingType) => ({
    id: gettingCoil.id ?? 0, // id из БД
    rollId: gettingCoil.ims_coil_id, // id из системы ММК
    parentId: gettingCoil.parent_coil_id,
    defectsCount: gettingCoil.defects_count ?? 0, // кол-во дефектов
    melting: gettingCoil.melting, // плавка
    supply: gettingCoil.supply, // партия
    startDate: DateFormatters.Dates.dateDDMMYYYYpointHHmmcolon(gettingCoil.create_time), // дата начала проката
    endDate: gettingCoil.end_time ? DateFormatters.Dates.dateDDMMYYYYpointHHmmcolon(gettingCoil.end_time) : undefined, // дата окончания проката
    steelGrade: gettingCoil.grade, // марка стали (тип металла?)
    surfaceQuality: gettingCoil.surface_quality, // качество поверхности
    startMetre: Utils.CommonUtils.convertMillimeterIntoMeter(gettingCoil.size.endx - gettingCoil.size.startx), // метр (длина рулона)
    type: gettingCoil.childs ? CoilRole.parent : CoilRole.child, // тип: дочерний или родительский (для иконки)
    mode: gettingCoil.end_time ? 'Оффлайн' : 'Онлайн', // режим: онлайн (текущий) или оффлайн (законченный) (для табл)
    children: []
});

export const coilList = (data: CoilListGettingType): CoilListType => {
    const _coilList = data.results.map((coil) => {
        // работает только для 1 вложенности children !
        const children = coil.childs?.map((childCoil) => coilGettingSerializer(childCoil)) ?? [];
        return {...coilGettingSerializer(coil), children}
    })

    return {
        data: _coilList,
        isNext: !!data.next,
        count: data.count
    };
};

export type {CoilType, CoilListGettingType}