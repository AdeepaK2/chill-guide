// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './screens/SplashScreen';
import { SignInScreen } from './screens/SignInScreen';
import {ThemeProvider} from "./ThemeContext";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}