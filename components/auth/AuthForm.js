import { View } from "react-native";
import Button from "../Button";

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ValidInput from "./ValidInput";


export default function AuthForm({ isLogin, onSubmit }) {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Bu alan zorunludur!')
            .email('Geçersiz e-mail.'),
        password: yup
            .string()
            .required('Bu alan zorunludur!')
            .min(8, 'Şifre en az 8 karakter olmalı'),
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

    return (
        <View>
            <ValidInput inputName="email" control={control} errors={errors} label="E-Mail" />
            <ValidInput inputName="password" control={control} errors={errors} label="Şifre" />
            {!isLogin && <ValidInput inputName="confirmpassword" control={control} errors={errors} label="Şifre Onay" />}
            <Button onPress={handleSubmit(submitHandler)} text={isLogin ? "Giriş Yap" : "Kayıt Ol"} />
        </View>
    )
}