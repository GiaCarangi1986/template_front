import { MouseEventHandler } from 'react'
import { PositionType } from '../../../const/cameras'

type CameraRowProps = {
  position: PositionType;
}

type CameraType = {
  positionNumber: number;
  isActive: boolean | undefined;
}

type HeaderTemplateType = {
  elem: JSX.Element;
  width: string;
}

type HeaderType = {
  template: HeaderTemplateType[];
}

export type { CameraRowProps, CameraType, HeaderTemplateType, HeaderType }