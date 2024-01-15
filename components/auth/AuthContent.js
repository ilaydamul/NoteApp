import { Text, View } from 'react-native';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Link from '../../components/Link';
import { useNavigation } from '@react-navigation/native';
import AuthForm from './AuthForm';
import { useState } from 'react';


export default function AuthContent({ isLogin }) {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    const navigation = useNavigation();
    function switchAuthPage() {
        if (isLogin) {
            navigation.replace("Register");
        } else {
            navigation.replace("Login");
        }
    }

    function submitHandler(credentials) {
        let { email, password, confirmPassword } = credentials;
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 50 }}>
            <Title textcenter>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</Title>
            <AuthForm isLogin={isLogin} onSubmit={submitHandler} credentialsInvalid={credentialsInvalid}/>
            {/* <Input placeholder="Adınız" />
            <Input placeholder="Şifreniz" /> */}
            <Link onPress={switchAuthPage}>{isLogin ? "Hesabınız mı yok? Kayıt olun." : "Giriş Yap"}</Link>
        </View>
    )
}
