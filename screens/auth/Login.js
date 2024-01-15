import { Button, Text, View } from 'react-native';

export default function Login({route,navigation}) {
  const { itemId, text } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Text>{itemId}</Text>
      <Text>{text}</Text>
      <Button title='Params Değiştir' onPress={()=>{navigation.setParams({itemId: Math.floor(Math.random() * 100)});}}/>
      <Button title='Giriş Yap' onPress={()=>{navigation.push("Login",{itemId: Math.floor(Math.random() * 100)})}}/>
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
      <Button title="Stackteki İlk Sayfaya Dön" onPress={() => navigation.popToTop()} />
    </View>
  )
}
