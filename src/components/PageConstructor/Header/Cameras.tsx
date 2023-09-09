import { FC, useEffect, useState } from 'react'

import { CamerasConst } from '../../../const'

import { CameraRowPropsType, CameraType } from './types'
import style from './index.module.scss'

const CameraRow: FC<CameraRowPropsType> = ({ position }) => {
  const [cameras, setCameras] = useState<CameraType[]>([])

  useEffect(() => {
    const MIDDLE = CamerasConst.COUNT / 2

    setCameras(Array.from(
      { length: MIDDLE },
      (_, i) => i + 1
    ).map(el => ({
      positionNumber: el,
      isActive: undefined
    })))
  }, [])

  const bodyStyle = getComputedStyle(document.body)

  return (
    <>
      {cameras.map(el => {
        let backgroundColor = bodyStyle.getPropertyValue('--color-gray-9d9')
        switch (el.isActive) {
          case true:
            backgroundColor = bodyStyle.getPropertyValue('--color-green-14c')
            break
          case false:
            backgroundColor = bodyStyle.getPropertyValue('--color-red-929')
            break
        }

        return (
          <div
            key={el.positionNumber}
            className={style.camera_row}
            style={{ backgroundColor }}
          >
            {`${el.positionNumber}${position.short}`}
          </div>
        )
      })}
    </>
  )
}

const Cameras = () => {
  return (
    <div className={style.cameras}>
      <CameraRow
        position={CamerasConst.POSITION_DESCRIPTION.top}
      />
      <CameraRow
        position={CamerasConst.POSITION_DESCRIPTION.bottom}
      />
    </div>
  )
}

export default Cameras