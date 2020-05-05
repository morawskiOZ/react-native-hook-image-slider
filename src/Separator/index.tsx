import * as React from 'react'
import { View, StyleSheet } from 'react-native'


export const Separator = ({width}: {width: number}) => {
    return (
        <View style={styles(width).separator}/>
    )
}

const styles = (width: number) => StyleSheet.create({
    separator: {
        width
    }
})