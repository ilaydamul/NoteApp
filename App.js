import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesContextProvider from './store/notes-context';

// SCREENS
import Home from './screens/Home';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Profile from './screens/Profile';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import Button from './components/Button';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Nots from './screens/Notes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Nots" component={Nots} options={{title: "Notlarım"}}/>
      <Tab.Screen name="Home" component={Home} options={{title: "Anasayfa"}} />
      <Tab.Screen name="Profile" component={Profile} options={{title: "Profil"}}/>
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
  var a = true;
  return a ? <HomeNav /> : <AuthNav />
}

export default function App() {
  return (
    <AuthContextProvider>
      <NotesContextProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </NotesContextProvider>
    </AuthContextProvider>
  );
}
