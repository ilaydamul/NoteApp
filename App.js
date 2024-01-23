import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesContextProvider from './store/notes-context';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// SCREENS
import Home from './screens/Home';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Profile from './screens/Profile';
import Notes from './screens/Notes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Notes') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#00ADB5',
      tabBarInactiveTintColor: '#393E46',
      headerShown: false
    })}>

      <Tab.Screen name="Home" component={Home} options={{ title: "Anasayfa" }} />
      <Tab.Screen name="Notes" component={Notes} options={{ title: "Notlarım" }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: "Profil" }} />
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

function Root() {
  const authCtx = useContext(AuthContext);
  return authCtx.isAuthenticated ? <AuthNav /> : <HomeNav />
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthContextProvider>
        <NotesContextProvider>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </NotesContextProvider>
      </AuthContextProvider>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
