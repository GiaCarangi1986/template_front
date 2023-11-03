import {FC, useContext} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {VariableSizeTree as Tree, VariableSizeNodeComponentProps, VariableSizeNodeData} from 'react-vtree';
import useScrollbarSize from 'react-scrollbar-size';

import {TableWindowContext} from "../../../contexts/table";

import {TableProps} from "./types";

type TreeType = {
    name: string,
    id: string,
    children?: TreeType[]
}
// Tree component can work with any possible tree structure because it uses an
// iterator function that the user provides. Structure, approach, and iterator
// function below is just one of many possible variants.
const tree: TreeType = {
    name: 'Root #1',
    id: 'root-1',
    children: [
        {
            children: [
                {id: 'child-2', name: 'Child #2'},
                {id: 'child-3', name: 'Child #3'},
            ],
            id: 'child-1',
            name: 'Child #1',
        },
        {
            children: [{id: 'child-5', name: 'Child #5'}],
            id: 'child-4',
            name: 'Child #4',
        },
    ],
};

type StackType = {
    nestingLevel: number;
    node: TreeType
}

function* treeWalker(refresh: any): any { // TODO тип
    const stack: StackType[] = [];

    stack.push({
        nestingLevel: 0,
        node: tree,
    });

    while (stack.length !== 0) {
        const temp = stack.pop();
        if (temp) {
            const {
                node: {children = [], id, name},
                nestingLevel,
            } = temp;

            const isOpened = yield refresh
                ? {
                    // The only difference VariableSizeTree `treeWalker` has comparing to
                    // the FixedSizeTree is the `defaultHeight` property in the data
                    // object.
                    defaultHeight: 30,
                    id,
                    isLeaf: children.length === 0,
                    isOpenByDefault: true,
                    name,
                    nestingLevel,
                }
                : id;

            if (children.length !== 0 && isOpened) {
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push({
                        nestingLevel: nestingLevel + 1,
                        node: children[i],
                    });
                }
            }
        }
    }
}

type DataType = {
    isLeaf: boolean;
    name: string;
}

const Node: FC<VariableSizeNodeComponentProps<VariableSizeNodeData & DataType>> = ({
                                                                                       data,
                                                                                       // height,
                                                                                       isOpen,
                                                                                       style,
                                                                                       toggle,
                                                                                       // ...props
                                                                                   }) => {
    const {isLeaf, name} = data
    const {
        RowRender
    } = useContext(TableWindowContext);
    return (
        <div style={{...style, width: 'max-content'}}>
            {!isLeaf && (
                <button type="button" onClick={toggle} style={{width: '30px'}}>
                    {isOpen ? '-' : '+'}
                </button>
            )}
            <div><RowRender name={name}/></div>
        </div>
    )
};

const Table: FC<TableProps> = ({HeaderRender, RowRender}) => {
    const {height: hs} = useScrollbarSize();
    const fixH = 20
    return (
        <AutoSizer>
            {({height, width}) => (
                <div style={{width: 'max-content', overflow: 'auto'}}>
                    <TableWindowContext.Provider value={{RowRender, HeaderRender}}>
                        <div style={{height: `${fixH}px`, position: 'sticky', width: 'max-content'}}>
                            <HeaderRender/>
                        </div>
                        <Tree treeWalker={treeWalker} height={height - fixH - hs} width={width}
                              style={{overflow: 'initial'}}>
                            {Node}
                        </Tree>
                    </TableWindowContext.Provider>
                </div>
            )}
        </AutoSizer>
    )
}

export default Table