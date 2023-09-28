import { CommonConst } from '../const'

export const setZIndex = () => {
  const elems: any = document.getElementsByClassName(CommonConst.CLASSNAME.containerRND)
  const arr: any[] = Array.from(elems)
  arr.sort((a: any, b: any) => a.style.zIndex - b.style.zIndex)
  for (let i = 0; i < arr.length - 1; i++) {
    const firstElemZIndex = +arr[0].style.zIndex

    const elem1 = arr[i]
    const elem2 = arr[i + 1]
    const elemZIndex1 = +elem1.style.zIndex
    const elemZIndex2 = +elem2.style.zIndex

    if (firstElemZIndex === 2) {
      elem1.style.zIndex = '1'
    }
    if (elemZIndex2 > elemZIndex1 + 1) {
      elem2.style.zIndex = `${elemZIndex1 + 1}`
    }
  }

  return `${+arr[arr.length - 1]?.style?.zIndex + 1}`
}
