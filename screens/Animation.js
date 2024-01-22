import { View, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles';
import Title from '../components/Title';

export default function Animation() {
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('./assets/gradientBall.json')}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Restart Animation"
                    onPress={() => {
                        animation.current?.reset();
                        animation.current?.play();
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});
