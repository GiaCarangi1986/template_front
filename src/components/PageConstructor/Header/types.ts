import { MouseEventHandler } from 'react'
import { PositionType } from '../../../const/cameras'

type CameraRowProps = {
  position: PositionType;
}

type CameraType = {
  positionNumber: number;
  isActive: boolean | undefined;
}

export type { CameraRowProps, CameraType }