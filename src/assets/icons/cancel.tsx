import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const Cancel = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Rect width="18" height="18" rx="9" fill="#CE0000" fill-opacity="0.1" />
            <Path d="M11.25 6.75L6.75 11.25" stroke="#F12711" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.75 6.75L11.25 11.25" stroke="#F12711" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default Cancel