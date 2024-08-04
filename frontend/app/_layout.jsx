import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import home from './screens/home'

const AppLayout = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={home}
                />
                <Stack.Screen

                />
                <Stack.Screen

                />
                <Stack.Screen

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppLayout;