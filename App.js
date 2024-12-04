// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './screens/SplashScreen';
import { SignInScreen } from './screens/SignInScreen';
import { ThemeProvider } from './components/ThemeProvider'; // Correct import
import { SignUpScreen } from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ThemeProvider>  {/* Ensure this wraps the entire app */}
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
