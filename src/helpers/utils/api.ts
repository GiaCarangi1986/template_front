import {useState} from "react";

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

type InitResponseType = {
    data: any;
    loading: boolean | undefined;
    error: any;
};

type ResponseType = InitResponseType & {
    getRequestData: (func: (params: any) => Promise<any>, params?: any) => void;
};

const INIT_RESPONSE = {
    data: undefined,
    loading: false,
    error: undefined,
};

enum FetchEnum {
    data = 'data',
    loading = 'loading',
    error = 'error',
}

export const useGetResponse = (): ResponseType => {
    const [response, setResponse] = useState<InitResponseType>(INIT_RESPONSE);

    const setFetchParam = (paramName: string, paramValue: any) => {
        setResponse((prev) => {
            const obj = {...prev};
            obj[paramName as keyof InitResponseType] = paramValue;
            return obj;
        });
    };

    const getRequestData = (func: (params: any) => Promise<any>, params?: any) => {
        setFetchParam(FetchEnum.loading, true);
        setFetchParam(FetchEnum.data, INIT_RESPONSE.data);
        setFetchParam(FetchEnum.error, INIT_RESPONSE.error);

        func(params)
            .then((res: any) => {
                setFetchParam(FetchEnum.loading, INIT_RESPONSE.loading);
                setFetchParam(FetchEnum.data, res);
                setFetchParam(FetchEnum.error, INIT_RESPONSE.error);
            })
            .catch((err: any) => {
                if (err.name === 'AbortError') {
                    console.log('AbortError: ', err);
                } else {
                    setFetchParam(FetchEnum.error, err);
                    setFetchParam(FetchEnum.loading, INIT_RESPONSE.loading);
                }
                setFetchParam(FetchEnum.data, INIT_RESPONSE.data);
            });
    };

    return {
        ...response,
        getRequestData,
    }
};