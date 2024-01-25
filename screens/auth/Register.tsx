import AuthContent from '../../components/auth/AuthContent';
import { signup } from '../../util/firebase';


export default function Register() {
  function registerHandler(datas){
    const email=datas.email;
    const password=datas.password;

    signup(email,password);
  }

  return (
    <AuthContent onAuthenticate={registerHandler}/>
  )
}
