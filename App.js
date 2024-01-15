import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesContextProvider from './store/context/notes-context';

// SCREENS
import Home from './screens/Home';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Profile from './screens/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}

function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

function AuthNav() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: "#222831"
      },
      headerTintColor: "#EEEEEE",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}>
      <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş Yap', headerShown: false }} initialParams={{ itemId: 42 }} />
      <Stack.Screen name="Register" component={Register} options={{ title: 'Kayıt Ol', headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const isAuth = false;
  var navComponent;

  if (isAuth) {
    navComponent = <HomeNav />
  } else {
    navComponent = <AuthNav />
  }


  return (
    <NotesContextProvider>
      <NavigationContainer>
        {navComponent}
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: "#222831"
          },
          headerTintColor: "#EEEEEE",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş Yap' }} initialParams={{ itemId: 42 }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Kayıt Ol' }} /> */}

        {/* <Stack.Screen name="Home" component={HomeNav} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} /> */}

        {/* <Stack.Screen name="Profile" component={Profile} options={({ route }) => ({
          title: route.params.name,
        })} /> */}
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </NotesContextProvider>

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
