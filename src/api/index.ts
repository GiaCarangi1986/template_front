const MAIN_IP_PORT = `${process.env.REACT_APP_IP_ADRESS}:${process.env.REACT_APP_PORT}`;
const PHOTO_IP_PORT = `${process.env.REACT_APP_IP_ADRESS}:${process.env.REACT_APP_PHOTO_PORT}`;
const MAIN_URL = `http://${MAIN_IP_PORT}/api`;
const PHOTO_URL = PHOTO_IP_PORT
    ? `http://${PHOTO_IP_PORT}`
    : `${MAIN_URL}/photos`;

const IS_MOCK_BY_SYSTEM = false;

type ListSendingCommonType = {
    limit: number;
    offset: number;
};

export {
    MAIN_URL, PHOTO_URL, IS_MOCK_BY_SYSTEM
}

export type {
    ListSendingCommonType
}