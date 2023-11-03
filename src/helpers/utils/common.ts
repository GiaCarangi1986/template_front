import React from 'react'
import {PlacementStyleType} from '../../components/UIComponents/Dropdown/types'

const addPropsToReactElement = (element: React.ReactNode, props: any) => {
    if (React.isValidElement(element)) {
        return React.cloneElement(element, props)
    }
    return element
}

export const addPropsToChildren = (children: React.ReactNode, props: any) => {
    if (!Array.isArray(children)) {
        return addPropsToReactElement(children, props)
    }
    return children.map(childElement =>
        addPropsToReactElement(childElement, props)
    )
}

export const getPlacementStyle = (placement: 'top_start' | 'top' | 'top_end' | 'bottom_start' | 'bottom' | 'bottom_end' | 'left_start' | 'left' | 'left_end' | 'right_start' | 'right' | 'right_end' | undefined) => {
    let placementStyle: PlacementStyleType = {}
    switch (placement) {
        case 'top_start':
            placementStyle = {bottom: '100%', left: 0}
            break
        case 'top':
            placementStyle = {
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)'
            }
            break
        case 'top_end':
            placementStyle = {bottom: '100%', right: 0}
            break
        case 'bottom_start':
            placementStyle = {top: '100%', left: 0}
            break
        case 'bottom':
            placementStyle = {
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)'
            }
            break
        case 'bottom_end':
            placementStyle = {top: '100%', right: 0}
            break
        case 'left_start':
            placementStyle = {right: '100%', top: 0}
            break
        case 'left':
            placementStyle = {
                right: '100%',
                top: '50%',
                transform: 'translateY(-50%)'
            }
            break
        case 'left_end':
            placementStyle = {right: '100%', bottom: 0}
            break
        case 'right_start':
            placementStyle = {left: '100%', top: 0}
            break
        case 'right':
            placementStyle = {
                left: '100%',
                top: '50%',
                transform: 'translateY(-50%)'
            }
            break
        case 'right_end':
            placementStyle = {left: '100%', bottom: 0}
            break
    }
    return placementStyle
}

type RotateStyleType = {
    transform?: string;
}

export const getRotateStyle = (rotate: 'right' | 'left' | 'reverse' | 'normal' | undefined) => {
    let rotateStyle: RotateStyleType = {}

    switch (rotate) {
        case 'right':
            rotateStyle = {transform: 'rotate(90deg)'}
            break
        case 'reverse':
            rotateStyle = {transform: 'rotate(180deg)'}
            break
        case 'left':
            rotateStyle = {transform: 'rotate(-90deg)'}
            break
        case 'normal':
            rotateStyle = {transform: 'rotate(0deg)'}
            break
    }

    return rotateStyle
}
