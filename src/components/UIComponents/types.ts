import { PlacementEnum } from '../../const/styles'

type DropdownProps = {
  children: React.ReactNode;
  id: string;
  button: JSX.Element;
  placement?: keyof typeof PlacementEnum;
}

type PlacementStyleType = {
  top_start?: number | string;
  top?: number | string;
  top_end?: number | string;
  bottom_start?: number | string;
  bottom?: number | string;
  bottom_end?: number | string;
  left_start?: number | string;
  left?: number | string;
  left_end?: number | string;
  right_start?: number | string;
  right?: number | string;
  right_end?: number | string;
  transform?: string;
}

export type { DropdownProps, PlacementStyleType }