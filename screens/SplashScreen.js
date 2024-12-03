// screens/SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../ThemeContext';

export function SplashScreen({ navigation }) {
    const { isDark, toggleTheme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDark ? '#1A1A1A' : '#E5F3F3',
        },
        content: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        logo: {
            width: 120,
            height: 120,
            marginBottom: 20,
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: isDark ? '#4A90E2' : '#4A90E2',
            marginBottom: 10,
        },
        subtitle: {
            fontSize: 20,
            fontWeight: '600',
            color: isDark ? '#FFFFFF' : '#000000',
            marginBottom: 10,
        },
        description: {
            fontSize: 16,
            textAlign: 'center',
            color: isDark ? '#CCCCCC' : '#666666',
            marginBottom: 30,
        },
        themeButton: {
            position: 'absolute',
            top: 40,
            right: 20,
        },
        buttonContainer: {
            flexDirection: 'row',
            gap: 10,
        },
        signUpButton: {
            backgroundColor: isDark ? '#4A90E2' : '#000000',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
        },
        signInButton: {
            backgroundColor: 'transparent',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: isDark ? '#FFFFFF' : '#000000',
        },
        signUpText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
        },
        signInText: {
            color: isDark ? '#FFFFFF' : '#000000',
            fontSize: 16,
            fontWeight: '600',
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.themeButton}
                onPress={toggleTheme}
            >
                <Text style={[styles.signInText, { fontSize: 24 }]}>
                    {isDark ? '☀️' : '🌙'}
                </Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}>CHILL</Text>
                <Text style={styles.subtitle}>Your All in One Chatbot</Text>
                <Text style={styles.description}>
                    Buddy is the most trusted and fast chatbot ever made on internet.
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}