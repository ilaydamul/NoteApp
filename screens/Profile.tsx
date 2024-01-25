import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles';
import Title from '../components/Title';
import ButtonStyle from '../components/ButtonStyle';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context.tsx';
import { logout } from '../util/firebase';

export default function Profile() {
  const authCtx = useContext(AuthContext);

  function logoutHandler() {
    logout();
    authCtx.logout();
  }

  return (
    <View style={{ ...globalStyles.container }}>
      <Title>
        Profil
      </Title>
      <ButtonStyle text="Çıkış Yap" onPress={logoutHandler} />
    </View>
  )
}
