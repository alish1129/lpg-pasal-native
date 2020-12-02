import { AppLoading, SplashScreen, Updates } from 'expo';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import React from 'react';
import { Animated, Button, StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import { DrawerNavigator } from './src/navigators/Navigation';
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto';
import { PlayfairDisplay_400Regular, PlayfairDisplay_500Medium, PlayfairDisplay_600SemiBold } from '@expo-google-fonts/playfair-display';
import { FAB } from 'react-native-paper';
import { SECONDARY_COLOR } from './src/utils/constants';
import { heightInPercentage, widthInPercentage } from './src/utils/helpers';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHide();

export default function App() {
	let [ fontsLoaded ] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
        Roboto_900Black,
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold
	});

	SafeAreaView.setStatusBarHeight(StatusBar.currentHeight);

	const ref = React.useRef(null);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Provider store={store}>
			<AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
				<PersistGate persistor={persistor}>
					<NavigationContainer ref={ref}>
						<DrawerNavigator />
					</NavigationContainer>
                    {console.log(ref?.current?.getCurrentRoute()?.name )}
                    <FAB icon="cart" style={styles.fab} onPress={() => ref.current && ref.current.navigate('Cart')} />
					
				</PersistGate>
			</AnimatedAppLoader>
		</Provider>
	);
}

function AnimatedAppLoader({ children, image }) {
	const [ isSplashReady, setSplashReady ] = React.useState(false);

	const startAsync = React.useMemo(
		// If you use a local image with require(...), use `Asset.fromModule`
		() => () => Asset.fromURI(image).downloadAsync(),
		[ image ]
	);

	const onFinish = React.useMemo(() => setSplashReady(true), []);

	if (!isSplashReady) {
		return <AppLoading startAsync={startAsync} onError={console.error} onFinish={onFinish} />;
	}

	return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }) {
	const animation = React.useMemo(() => new Animated.Value(1), []);
	const [ isAppReady, setAppReady ] = React.useState(false);
	const [ isSplashAnimationComplete, setAnimationComplete ] = React.useState(false);

	React.useEffect(
		() => {
			if (isAppReady) {
				Animated.timing(animation, {
					toValue: 0,
					duration: 200,
					useNativeDriver: true
				}).start(() => setAnimationComplete(true));
			}
		},
		[ isAppReady ]
	);

	const onImageLoaded = React.useMemo(() => async () => {
		SplashScreen.hide();
		try {
			// Load stuff
			await Promise.all([]);
		} catch (e) {
			// handle errors
		} finally {
			setAppReady(true);
		}
	});

	return (
		<View style={{ flex: 1 }}>
			{isAppReady && children}
			{!isSplashAnimationComplete && (
				<Animated.View
					pointerEvents="none"
					style={[
						StyleSheet.absoluteFill,
						{
							backgroundColor: Constants.manifest.splash.backgroundColor,
							opacity: animation
						}
					]}
				>
					<Animated.Image
						style={{
							width: '100%',
							height: '100%',
							resizeMode: Constants.manifest.splash.resizeMode || 'contain',
							transform: [
								{
									scale: animation
								}
							]
						}}
						source={image}
						onLoadEnd={onImageLoaded}
						fadeDuration={0}
					/>
				</Animated.View>
			)}
		</View>
	);
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fab: {
		position: 'absolute',
		margin: 16,
		right: widthInPercentage(5),
		bottom: heightInPercentage(6),
		backgroundColor: SECONDARY_COLOR
	}
});
