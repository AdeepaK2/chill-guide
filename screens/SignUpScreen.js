import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from '../ThemeContext';


export function SignUpScreen({ navigation }) {
    const { isDark, toggleTheme } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDark ? '#1A1A1A' : '#E5F3F3',
            padding: 20,
        },
        logo: {
            width: 80,
            height: 80,
            alignSelf: 'center',
            marginTop: 40,
            marginBottom: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: isDark ? '#FFFFFF' : '#000000',
            marginBottom: 30,
            textAlign: 'center',
        },
        inputLabel: {
            fontSize: 16,
            marginBottom: 8,
            color: isDark ? '#FFFFFF' : '#000000',
        },
        input: {
            backgroundColor: isDark ? '#2C2C2C' : '#FFFFFF',
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            marginBottom: 16,
            fontSize: 16,
            color: isDark ? '#FFFFFF' : '#000000',
        },
        termsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
        },
        checkbox: {
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: '#4A90E2',
            borderRadius: 4,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkboxSelected: {
            backgroundColor: '#4A90E2',
        },
        termsText: {
            color: isDark ? '#FFFFFF' : '#000000',
        },
        termsLink: {
            color: '#4A90E2',
        },
        signUpButton: {
            backgroundColor: '#4A90E2',
            borderRadius: 25,
            paddingVertical: 14,
            alignItems: 'center',
            marginBottom: 20,
        },
        signUpButtonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
        },
        dividerText: {
            color: isDark ? '#FFFFFF' : '#000000',
            textAlign: 'center',
            marginBottom: 20,
        },
        socialButtons: {
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 30,
        },
        socialButton: {
            width: 50,
            height: 50,
            backgroundColor: isDark ? '#2C2C2C' : '#FFFFFF',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
        },
        signInContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        signInText: {
            color: isDark ? '#FFFFFF' : '#000000',
        },
        signInLink: {
            color: '#4A90E2',
            marginLeft: 5,
        },
    });

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                style={styles.themeButton}
                onPress={toggleTheme}
            >
                <Text style={[styles.signInText, { fontSize: 24 }]}>
                    {isDark ? '☀️' : '🌙'}
                </Text>
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Create your account</Text>

            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: jon smith"
                placeholderTextColor={isDark ? '#666666' : '#999999'}
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: jon.smith@email.com"
                placeholderTextColor={isDark ? '#666666' : '#999999'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={isDark ? '#666666' : '#999999'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={styles.inputLabel}>Confirm password</Text>
            <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={isDark ? '#666666' : '#999999'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.termsContainer}
                onPress={() => setAcceptedTerms(!acceptedTerms)}
            >
                <View style={[styles.checkbox, acceptedTerms && styles.checkboxSelected]} />
                <Text style={styles.termsText}>
                    I understood the <Text style={styles.termsLink}>terms & policy</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.dividerText}>or sign up with</Text>

            <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text>G</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text>f</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text>t</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.signInLink}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}