import AuthContent from '../../components/auth/AuthContent';

export default function Login() {
  function loginHandler(datas){
    console.log(datas);
  }

  return (
    <AuthContent isLogin={true} onAuthenticate={loginHandler} />
  )
}
