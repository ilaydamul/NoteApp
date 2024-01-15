import { Button, Text, TextInput, View } from 'react-native';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Link from '../../components/Link';
import AuthContent from '../../components/auth/AuthContent';

export default function Login({ route, navigation }) {
  const { itemId, text } = route.params;



  return (
    // <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 50 }}>
    <AuthContent isLogin={true} />
    // <Text>Login</Text> 
    //  <Title textcenter>Giriş Yap</Title>

    // <Input placeholder="Adınız" />
    // <Link onPress={() => navigation.push("Register")}>Hesabınız mı yok? Kayıt olun.</Link>
    // <Text>{itemId}</Text>
    // <Text>{text}</Text> 
    //  <Button title='Params Değiştir' onPress={()=>{navigation.setParams({itemId: Math.floor(Math.random() * 100)});}}/>
    // <Button title='Giriş Yap' onPress={()=>{navigation.push("Login",{itemId: Math.floor(Math.random() * 100)})}}/>
    // <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    // <Button title="Stackteki İlk Sayfaya Dön" onPress={() => navigation.popToTop()} />
    // </View>
  )
}
