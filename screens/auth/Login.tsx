import { useContext, useState } from 'react';
import AuthContent from '../../components/auth/AuthContent';
import { AuthContext } from '../../store/auth-context.tsx';
import { signin } from '../../util/firebase';


export default function Login() {
  const authCtx = useContext(AuthContext);

  function loginHandler(datas) {
    const email = datas.email;
    const password = datas.password;
    var errTxt = "";
    
    signin(email, password).then(() => {
      authCtx.authenticate(true);
    }).catch((error) => {

      if (error.code === "auth/invalid-credential" || error.code === "auth/invalid-email") {
        errTxt = "E-mail/şifreniz yanlış. Tekrar deneyin.";
      } else {
        errTxt = "Bir şeyler yanlış gitti.";
      }
      authCtx.errorHandler(errTxt);
    });

  }

  return (
    <AuthContent isLogin={true} onAuthenticate={loginHandler} />
  )
}
