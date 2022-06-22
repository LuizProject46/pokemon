import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({color}){
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 12,
        flex: 1,
    }
})

