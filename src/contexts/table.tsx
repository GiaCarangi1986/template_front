import {createContext, ElementType} from "react";

type TableContextType = {
    HeaderRender: ElementType,
    RowRender: ElementType
}

const initialContextValue: TableContextType = {
    // headers: [],
    // onSort: () => null,
    // onExpand: () => null,
    HeaderRender: 'div' as ElementType,
    RowRender: 'div' as ElementType,
};

export const TableWindowContext =
    createContext<TableContextType>(initialContextValue);
