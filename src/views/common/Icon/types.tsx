import { VariantEnum } from '../../../const/styles'

type PropsType = {
    children: React.ReactNode;
    width?: number;
    height?: number;
    view?: keyof typeof VariantEnum;
    withoutEffects?: boolean;
}

export type { PropsType }