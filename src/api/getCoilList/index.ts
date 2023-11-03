import qs from "qs";

import {Utils} from "../../helpers";
import {MAIN_URL} from "../index";
import {incoming, outgoing} from "./serializer";
import {getMockCoilList} from "./mockData";

import {CoilListSendingType} from "./serializer/outgoing";

let controller = new AbortController();
let signal = controller.signal;

export const getCoilList = async (data: CoilListSendingType) => {
    const result = Utils.ApiUtils.isNeedUseMockData({mockFunc: getMockCoilList});
    if (result !== undefined) {
        return result;
    }

    const {qsData, bodyData} = outgoing.coilList(data);

    if (signal.aborted) {
        controller = new AbortController();
        signal = controller.signal;
    }

    const res = await fetch(`${MAIN_URL}/coils/search/?${qs.stringify(qsData)}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData),
        signal
    })

    return await Utils.ApiUtils.responseProcessing(res, incoming.coilList);
}

export const abortCoilList = () => {
    controller.abort();
};