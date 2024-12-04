// screens/SplashScreen.js
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';

export function SplashScreen({ navigation }) {
    const { styles, theme } = useTheme();

    // Ensure styles are not null before accessing
    if (!styles || !theme) {
        return <Text>Loading...</Text>;  // Show a loading indicator or fallback UI
    }

    return (
        <View style={[styles.container, styles.splashContainer]}>
            <ThemeToggle />

            <View style={styles.splashContent}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.splashLogo}
                />
                <Text style={styles.splashTitle}>CHILL GUIDE</Text>
                <Text style={styles.splashSubtitle}>Your All in One Chatbot</Text>
                <Text style={styles.splashDescription}>
                    Buddy is the most trusted and fast chatbot ever made on the internet.
                </Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.primaryButtonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.secondaryButtonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
