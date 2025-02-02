import React from 'react'
import { Text as ReactNativeText, TextProps } from "react-native";

const Text: React.FC<TextProps> = ({ className, ...props }) => {
    return <ReactNativeText {...props} className={className + " font-[IRYekan]"} />
}

export default Text