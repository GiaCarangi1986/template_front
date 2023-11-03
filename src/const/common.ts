export const CLASSNAME = {
    mainPageParentRND: 'mainPageParentRND',
    headerRND: 'headerRND',
    containerRND: 'containerRND'
}

export const STORE_NAMES = {
    MAIN_WIDGETS: 'MAIN_WIDGETS',
    INIT_GRID_WIDGETS: 'INIT_GRID_WIDGETS'
}

export enum ColumnTypeEnum {
    label = 'label',
    sortLabel = 'sortLabel',
    name = 'name',
    minWidth = 'minWidth',
    maxWidth = 'maxWidth',
    isHideBySystem = 'isHideBySystem',
    isHideByUser = 'isHideByUser',
    apiName = 'apiName',
    color = 'color',
    kind = 'kind',
}

export type ColumnType = {
    [ColumnTypeEnum.label]?: string;
    [ColumnTypeEnum.sortLabel]?: string;
    [ColumnTypeEnum.name]?: string;
    [ColumnTypeEnum.minWidth]?: string;
    [ColumnTypeEnum.maxWidth]?: string;
    [ColumnTypeEnum.isHideBySystem]?: boolean;
    [ColumnTypeEnum.isHideByUser]?: boolean;
    [ColumnTypeEnum.apiName]?: string;
    [ColumnTypeEnum.color]?: string;
    [ColumnTypeEnum.kind]?: string | number;
};