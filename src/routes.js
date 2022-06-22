import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'

import Home from './pages/Home'
import Details from './pages/Details'
import Header from './components/Header'

const {Navigator, Screen } = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer >
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen 
                    name="Home"
                    component={Home}                  
                />
                <Screen 
                    name="Details" 
                    component={Details}
                    options={{
                        headerTintColor: '#fc0f4a',
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitle: 'Detalhes',
                        
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}