import { Text, View } from 'react-native';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Link from '../../components/Link';
import AuthContent from '../../components/auth/AuthContent';

export default function Register({ navigation }) {
  function registerHandler(datas) {
    console.log(datas);
  }

  return (
    <AuthContent onAuthenticate={registerHandler} />
    // <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 50 }}>
    //   <Title textcenter>Kayıt Ol</Title>

    //   <Input placeholder="Adınız" />
    //   <Link onPress={() => navigation.push("Login")}>Giriş Yap</Link>
    // </View>
  )
}
