// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from '../components/ThemeProvider'; // Assuming ThemeProvider is wrapped correctly
import { ThemeToggle } from '../components/ThemeToggle';

export function SignUpScreen({ navigation }) {
    const { styles, theme } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSignUp = () => {
        // You can add your form validation and API logic here
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            // Proceed with signup logic
            console.log('Sign Up with', { name, email, password });
        }
    };

    return (
        <ScrollView style={styles.container}>
            <ThemeToggle />
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Create your account</Text>

            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: jon smith"
                placeholderTextColor={theme.inputPlaceholder}
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: jon.smith@email.com"
                placeholderTextColor={theme.inputPlaceholder}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={theme.inputPlaceholder}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={styles.inputLabel}>Confirm password</Text>
            <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={theme.inputPlaceholder}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.termsContainer}
                onPress={() => setAcceptedTerms(!acceptedTerms)}
            >
                <View style={[styles.checkbox, acceptedTerms && styles.checkboxSelected]} />
                <Text style={styles.text}>
                    I understood the <Text style={styles.link}>terms & policy</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
                <Text style={styles.primaryButtonText}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.text}>or sign up with</Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.text}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.text}>f</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.text}>t</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.text}>Have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.link}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
