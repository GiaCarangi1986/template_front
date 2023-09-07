type RouteInfoType = {
    pageName: string;
    path: string;
    // btns?: Record<string, ColumnType>;
    // rndIds?: {
    //   parentId: string;
    //   classNameId: string;
    // };
    title: string;
};



export const ROUTE_INFO: Record<string, RouteInfoType> = {
    main: {
        pageName: 'main',
        path: '/',
        //   btns: CONSTRUCTOR_BTNS,
        //   rndIds: {
        //     parentId: ID.main,
        //     classNameId: CLASSNAME.parentMain
        //   },
        title: 'Главная'
    },
    // service: {
    //   pageName: 'service',
    //   path: '/service',
    //   btns: CONSTRUCTOR_SERVICE_BTNS,
    //   rndIds: {
    //     parentId: ID.service,
    //     classNameId: CLASSNAME.parentService
    //   },
    //   title: 'Сервис'
    // },

};