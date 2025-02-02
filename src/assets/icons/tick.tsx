import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const Tick = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
            <Rect width="18" height="18" rx="9" fill="#55D009" fillOpacity="0.1" />
            <Path d="M12.1233 7L7.22603 11.7489L5 9.59029" stroke="#55D009" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export default Tick