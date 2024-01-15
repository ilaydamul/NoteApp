import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// SCREENS
import Home from './screens/Home';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: "#2d2"
        },
        headerTintColor: "#111",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Anasayfa' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş Yap' }} initialParams={{ itemId: 42 }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen name="Profile" component={Profile} options={({ route }) => ({
          title: route.params.name,
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
