import { ButtonProps as ButtonPropsUI } from '@material-ui/core'
import { VariantEnum } from '../../../const/styles'

type ButtonProps = ButtonPropsUI & {
  height?: number;
  view?: keyof typeof VariantEnum;
  withoutEffects?: boolean;
  iconView?: keyof typeof VariantEnum;
  transparentBtn?: boolean;
}

export type { ButtonProps }