import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {SvgUri} from 'react-native-svg'
export default function ListItem({data, navigation}){
    const types= {
      rock: {
        backgroundColor: 'rgb(148, 81, 81)'
      },
      ground: {
        backgroundColor: 'rgb(148, 81, 50)'
      },
      ghost: {
        backgroundColor: 'rgb(247, 247, 247)'
      },
      electric :{
       backgroundColor: 'rgb(255, 255, 161)'
      },
      bug :{
       backgroundColor: '#F6D6A7'
      },
      poison :{
       backgroundColor: '#e0a7f6'
      },
      normal : {
       backgroundColor: '#F4F4F4'
      },
      fairy : {
       backgroundColor: 'rgba(255, 192, 203, 0.863)'
      },
      fire :{
       backgroundColor: '#FBE3DF'
      }
      ,grass: {
       backgroundColor:'#E2F9E1'
      },
      water: {
       backgroundColor:'#E0F1FD'
      }}
    //   console.log(data.sprites.front_default)
      //types[data?.types[0].type.name].backgroundColor
    return(
        <View key={data.id} style={[styles.card,{backgroundColor: types[data?.types[0].type.name].backgroundColor}]}>
            <Text style={{marginBottom: 10}}>#{data.id}</Text>
            <Image         
                style={{resizeMode: 'contain', width: 200, height: 200}}           
                source={{ uri : data.sprites.front_default}}
            />
            <Text style={{color: '#333', fontSize: 25, fontWeight: 'bold'}}>
                {data.name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details', data)}>
                <Text style={styles.textBtn}>
                    Detalhes
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginTop: 20,
        margin: 8,
        // backgroundColor: '#da1231',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3

    },
    button: {
        width: '50%',
        height: 40,
        backgroundColor: '#fc0f4a',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#fff',
        fontSize: 16
    }
})