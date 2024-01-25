import { Text, View } from 'react-native';
import Link from '../Link';
import { useNavigation } from '@react-navigation/native';
import AuthForm from './AuthForm';
import Title from '../Title';

export default function AuthContent({ isLogin=false, onAuthenticate }) {
    const navigation = useNavigation();
    function switchAuthPage() {
        if (isLogin) {
            navigation.replace("Register");
        } else {
            navigation.replace("Login");
        }
    }

    function submitHandler(formData) {
        onAuthenticate(formData);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 50 }}>
            <Title textcenter>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</Title>
            <AuthForm isLogin={isLogin} onSubmit={submitHandler} />
            <Link onPress={switchAuthPage}>{isLogin ? "Hesabınız mı yok? Kayıt olun." : "Giriş Yap"}</Link>
        </View>
    )
}
