import { ButtonProps } from '@material-ui/core'
import { VariantEnum } from '../../../const/styles'

type PropsType = ButtonProps & {
  height?: number;
  view?: keyof typeof VariantEnum;
  withoutEffects?: boolean;
}

export type { PropsType }