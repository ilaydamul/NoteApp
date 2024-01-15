import { Button, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Home
      </Text>
      {/* <Button title='Giriş Yap' onPress={()=>{navigation.navigate("Login",{itemId:1,text:'Item Numarası 1'})}}/> */}
      <Button title='Profil' onPress={()=>{navigation.navigate("Profile",{name:"Profil Sayfası"})}}/>
    </View>
  )
}
