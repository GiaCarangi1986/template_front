import { ButtonProps as ButtonPropsUI } from '@material-ui/core'
import { RotateEnum, VariantEnum } from '../../../const/styles'

type ButtonProps = ButtonPropsUI & {
  height?: number;
  view?: keyof typeof VariantEnum;
  withoutEffects?: boolean;
  iconView?: keyof typeof VariantEnum;
  transparentBtn?: boolean;
  fullWidth?: boolean;
  fullClickable?: boolean;
  label?: string;
  dropdownLabel?: boolean;
  iconRotate?: keyof typeof RotateEnum;
  dropdownrotate?: 0 | 1;
}

export type { ButtonProps }