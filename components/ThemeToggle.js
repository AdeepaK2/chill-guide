// components/ThemeToggle.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../components/ThemeProvider';

export function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <TouchableOpacity
            style={styles.themeButton}
            onPress={toggleTheme}
        >
            <Text style={styles.themeIcon}>{isDark ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    themeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },
    themeIcon: {
        fontSize: 24,
    },
});