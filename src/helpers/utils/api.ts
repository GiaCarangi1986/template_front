import {IS_MOCK_BY_SYSTEM} from "../../api";

export const responseProcessing = async (
    res: Response,
    serFunc?: (data: any) => any
) => {
    if (!res.ok) {
        return res.text().then(text => {
            throw new Error(text)
        })
    } else {
        const resJson = await res.json();
        if (serFunc) {
            return serFunc(resJson)
        }
        return resJson
    }
};

type MockDataParams = {
    mockFunc: (data?: any) => any,
    mockParams?: any,
    isMock?: boolean
}

export const isNeedUseMockData = (
    params: MockDataParams
) => {
    const {mockFunc, mockParams, isMock} = params
    if (IS_MOCK_BY_SYSTEM || isMock) {
        return mockFunc(mockParams);
    }
};