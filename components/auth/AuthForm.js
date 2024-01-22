import { Text, View } from "react-native";
import Button from "../ButtonStyle";

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ValidInput from "./ValidInput";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../store/auth-context";
import { globalStyles } from "../../styles";
import ButtonStyle from "../ButtonStyle";


export default function AuthForm({ isLogin, onSubmit }) {
    const authCtx = useContext(AuthContext);

    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Bu alan zorunludur!'),
        // .email('Geçersiz e-mail.'),
        password: yup
            .string()
            .required('Bu alan zorunludur!'),
        // .min(8, 'Şifre en az 8 karakter olmalı'),
        confirmpassword: isLogin ? undefined : yup.string().required('Bu alan zorunludur!')
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function submitHandler(formData) {
        onSubmit(formData);
    }

    useEffect(() => {
        authCtx.errorHandler("");
    }, [])

    return (
        <View>
            <ValidInput inputName="email" control={control} errors={errors} label="E-Mail" />
            <ValidInput inputName="password" control={control} errors={errors} label="Şifre" />
            {!isLogin && <ValidInput inputName="confirmpassword" control={control} errors={errors} label="Şifre Onay" />}
            {authCtx.errorText ? <Text style={globalStyles.errorTxt} >{authCtx.errorText}</Text> : ""}
            <ButtonStyle onPress={handleSubmit(submitHandler)} style text={isLogin ? "Giriş Yap" : "Kayıt Ol"} />
        </View>
    )
}

