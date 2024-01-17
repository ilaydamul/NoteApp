import AuthContent from '../../components/auth/AuthContent';
import { signin } from '../../util/firebase';


export default function Login({navigation}) {
  function loginHandler(datas) {
    const email=datas.email;
    const password=datas.password;

    signin(email,password);
    // navigation.navigate("Home");

  }

  return (
    <AuthContent isLogin={true} onAuthenticate={loginHandler} />
  )
}
