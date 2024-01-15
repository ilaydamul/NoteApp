import { useState } from "react";
import Input from "../Input";
import { View } from "react-native";
import Button from "../Button";

export default function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

    const {
        email: emailIsInvalid,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    function onChangeInput(inputType, inputValue) {
        switch (inputType) {
            case "email":
                setEnteredEmail(inputValue);
                break;
            case "password":
                setEnteredPassword(inputValue);
                break;
            case "confirmpassword":
                setEnteredConfirmPassword(inputValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword
        })
    }

    return (
        <View>
            <Input label={"E-Mail"} onChangeInput={onChangeInput.bind(this, "email")} isInvalid={emailIsInvalid} />
            <Input label={"Şifre"} onChangeInput={onChangeInput.bind(this, "password")} isInvalid={passwordIsInvalid} />
            {!isLogin && <Input label={"Şifre Onay "} onChangeInput={onChangeInput.bind(this, "confirmpassword")} isInvalid={passwordsDontMatch} />}
            <Button onPress={submitHandler} text={isLogin ? "Giriş Yap" : "Kayıt Ol"} />
        </View>
    )
}