import React from 'react'
import { Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'
import SignUp from '../screens/(auth)/SignUp'
import login from '../screens/(auth)/login'
import about from '../screens/about'
import breakfast from '../screens/meals/breakfast'
import lunch from '../screens/meals/lunch'
import dinner from '../screens/meals/dinner'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Sign Up"
                component={SignUp}
            />
            <Stack.Screen
                name="Log In"
                component={login}
            />
            <Stack.Screen
                name="About"
                component={about}
            />
            <Stack.Screen
                name="breakfast"
                component={breakfast}
            />
            <Stack.Screen
                name="lunch"
                component={lunch}
            />
            <Stack.Screen
                name="dinner"
                component={dinner}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation