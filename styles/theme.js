// styles/theme.js
import { StyleSheet } from 'react-native';

export const lightTheme = {
    background: '#E5F3F3',
    text: '#000000',
    textSecondary: '#666666',
    primary: '#4A90E2',
    secondary: '#000000',
    inputBackground: '#FFFFFF',
    inputText: '#000000',
    inputPlaceholder: '#999999',
    card: '#FFFFFF',
    border: '#E1E1E1'
};

export const darkTheme = {
    background: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    primary: '#4A90E2',
    secondary: '#FFFFFF',
    inputBackground: '#2C2C2C',
    inputText: '#FFFFFF',
    inputPlaceholder: '#666666',
    card: '#2C2C2C',
    border: '#333333'
};

export const createStyles = (theme) => {
    // Fallback to an empty object if no theme is provided
    if (!theme) return StyleSheet.create({});

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        scrollContainer: {
            flexGrow: 1,
            padding: 20,
        },

        // Splash screen specific styles
        splashContainer: {
            backgroundColor: theme.background,
        },
        splashContent: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        splashLogo: {
            width: 120,
            height: 120,
            marginBottom: 20,
        },
        splashTitle: {
            fontSize: 28,
            fontWeight: 'bold',
            color: theme.primary,
            marginBottom: 10,
        },
        splashSubtitle: {
            fontSize: 20,
            fontWeight: '600',
            color: theme.text,
            marginBottom: 10,
        },
        splashDescription: {
            fontSize: 16,
            textAlign: 'center',
            color: theme.textSecondary,
            marginBottom: 30,
        },

        // Common text styles
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.text,
            marginBottom: 30,
            textAlign: 'center',
        },
        subtitle: {
            fontSize: 16,
            color: theme.textSecondary,
            marginBottom: 20,
        },

        // Button styles
        buttonRow: {
            flexDirection: 'row',
            gap: 10,
        },
        primaryButton: {
            backgroundColor: theme.secondary,
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
            alignItems: 'center',
        },
        secondaryButton: {
            backgroundColor: 'transparent',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: theme.secondary,
            alignItems: 'center',
        },
        primaryButtonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
        },
        secondaryButtonText: {
            color: theme.secondary,
            fontSize: 16,
            fontWeight: '600',
        },

        // Input styles
        input: {
            backgroundColor: theme.inputBackground,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            marginBottom: 16,
            fontSize: 16,
            color: theme.inputText,
        },
        inputLabel: {
            fontSize: 16,
            marginBottom: 8,
            color: theme.text,
        },

        // Other common styles
        logo: {
            width: 80,
            height: 80,
            alignSelf: 'center',
            marginVertical: 20,
        },
        socialButtonsContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
            marginVertical: 20,
        },
        socialButton: {
            width: 50,
            height: 50,
            backgroundColor: theme.card,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme.border,
        },
        // ... (keep your existing styles) ...

        // Auth screen specific styles
        header: {
            alignItems: 'center',
            marginTop: 60,
            marginBottom: 40,
        },
        formContainer: {
            paddingHorizontal: 20,
        },
        forgotPasswordContainer: {
            alignItems: 'flex-end',
            marginBottom: 24,
        },
        footerContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        },
        termsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            paddingHorizontal: 20,
        },
        checkbox: {
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: theme.primary,
            borderRadius: 4,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkboxSelected: {
            backgroundColor: theme.primary,
        },
        text: {
            color: theme.text,
            fontSize: 14,
        },
        link: {
            color: theme.primary,
            fontSize: 14,
            fontWeight: '600',
            marginLeft: 5,
        }
    });
};
