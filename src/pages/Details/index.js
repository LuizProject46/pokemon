import React from 'react'
import { View, StyleSheet, Text, ListView } from 'react-native'
import {SvgUri} from 'react-native-svg'
import Header from '../../components/Header'
export default function Details({route, navigation}){
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
        navigation.setOptions({
            headerBackground: () => <Header color={types[route.params.types[0].type.name].backgroundColor}/>
        })
   
    return(
        <View style={[style.container, { backgroundColor: types[route.params.types[0].type.name].backgroundColor}]}>
             <Text style={style.text}>{route.params.name}</Text>
            <SvgUri
            width={200}
            height={200}
            uri={route.params.sprites.other.dream_world.front_default}
            />
            
            <View style={style.infoDiv}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: '#333'}}>Sobre</Text>
                <View style={style.info}>
                    <View style={{alignItems:'flex-start'}}>
                        <Text style={style.infoTextLabel}>Espécie</Text>
                        <Text style={style.infoTextLabel}>Tipo </Text>
                        <Text style={style.infoTextLabel}>Peso </Text>
                        <Text style={style.infoTextLabel}>Altura</Text>
                        <Text style={style.infoTextLabel}>Tipo</Text>
                        <Text style={style.infoTextLabel}>Habilidade</Text>
                    </View>
                    <View style={{alignItems:'flex-start'}}>
                        <Text style={style.infoText}>{route.params.species.name}</Text>
                        <Text style={style.infoText}>{route.params.types[0].type.name}</Text>
                        <Text style={style.infoText}> {route.params.weight}hg</Text>
                        <Text style={style.infoText}> {route.params.height}dm</Text>
                        <Text style={style.infoText}>{route.params.types[0].type.name}</Text>
                        <Text style={style.infoText}>{route.params.abilities[0].ability.name}</Text>
                    </View>
                </View>
                
                
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoDiv: {
        marginTop: 30,
        backgroundColor: '#ffff',
        width: '90%',
        height: '40%',
        borderRadius:12,
        padding: 12,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
       
        
        
    },
    info: {

        width: '100%',
        height: '80%',
        borderRadius:12,
        padding: 4,
       
        flexDirection: 'row',
        justifyContent: 'space-around',
       
        
        
    },
    infoText: {
        color: '#333',
        fontSize: 22
    },
    infoTextLabel: {
        color: '#667',
        fontSize: 22
    },
    text:{
        color: '#333',
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 'bold'
    }
})