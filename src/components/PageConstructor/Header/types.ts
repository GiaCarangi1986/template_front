import { PositionType } from '../../../const/cameras'

type CameraRowPropsType = {
  position: PositionType;
}

type CameraType = {
  positionNumber: number;
  isActive: boolean | undefined;
}

export type { CameraRowPropsType, CameraType }