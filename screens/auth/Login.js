import { useContext } from 'react';
import AuthContent from '../../components/auth/AuthContent';
import { AuthContext } from '../../store/auth-context';
import { signin } from '../../util/firebase';


export default function Login() {
  const authCtx = useContext(AuthContext);

  function loginHandler(datas) {
    const email = datas.email;
    const password = datas.password;

    try {
      signin(email, password);
      authCtx.authenticate(true);
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <AuthContent isLogin={true} onAuthenticate={loginHandler} />
  )
}
