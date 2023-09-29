import {VariantEnum} from '../../const/styles'

type ContainerRNDProps = {
    children: React.ReactNode;
    bounds: string | Element;
    name: string;
    headerLabel: string;
    variant: keyof typeof VariantEnum;
}

type BlockRndType = {
    x: number;
    y: number;
    width: number | string;
    height: number | string;
};

type HeaderRNDType = {
    label: string;
    name: string;
}

export type {ContainerRNDProps, BlockRndType, HeaderRNDType}