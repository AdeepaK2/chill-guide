// screens/SignInScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../components/ThemeProvider';  // Assuming ThemeProvider is wrapped correctly
import { ThemeToggle } from '../components/ThemeToggle';

export function SignInScreen({ navigation }) {
    const { styles, theme } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Sign in logic goes here
        console.log('Sign in with', { email, password });
    };

    return (
        <View style={styles.container}>
            <ThemeToggle />
            <View style={styles.header}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={theme.inputPlaceholder}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={theme.inputPlaceholder}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.forgotPasswordContainer}>
                    <Text style={styles.link}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
                    <Text style={styles.primaryButtonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
