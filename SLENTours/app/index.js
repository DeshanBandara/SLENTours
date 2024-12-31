import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import homeScreen from './screens/homeScreen'
import indexScreen from './screens/indexScreen'
import loginScreen from './screens/loginScreen'
import signinScreen from './screens/signinScreen'

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='indexScreen'
        component={indexScreen}
        options={{title: 'Welcome!'}}
      />
      
    </Stack.Navigator>
  )
}

export default index

const styles = StyleSheet.create({})