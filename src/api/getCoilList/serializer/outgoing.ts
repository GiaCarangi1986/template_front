import {DateFormatters} from "../../../helpers";

import {ListSendingCommonType} from "../../index";

type CoilListSendingQSType = ListSendingCommonType;
type CoilListSendingBodyType = {
    order_by?: string;
    ims_coil_id?: string;
    start_date?: string;
    end_date?: string;
};

type CoilListSendingType = ListSendingCommonType & {
    dateStart: string;
    dateEnd: string;
    ordering: string;
    searchId: string;
};

type CoilListSendingServerFormatType = {
    qsData: CoilListSendingQSType;
    bodyData?: CoilListSendingBodyType;
};

export const coilList = (
    data: CoilListSendingType
): CoilListSendingServerFormatType => ({
    qsData: {
        limit: data.limit,
        offset: data.offset
    },
    bodyData: {
        order_by: data.ordering,
        ims_coil_id: data.searchId,
        start_date: data.dateStart
            ? DateFormatters.Dates.dateYYYYMMDDHHmmssBack(data.dateStart, 0)
            : undefined,
        end_date: data.dateEnd
            ? DateFormatters.Dates.dateYYYYMMDDHHmmssBack(data.dateEnd, 59)
            : undefined
    }
});

export type {CoilListSendingType}