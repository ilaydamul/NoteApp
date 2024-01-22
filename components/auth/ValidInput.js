import { View, Text } from 'react-native';
import Input from '../Input';

import { Controller } from 'react-hook-form';
import { globalStyles } from '../../styles';

export default function ValidInput({ inputName, placeholder, control, errors, label }) {
    return (
        <>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input value={value}
                        onChangeInput={onChange}
                        placeholder={placeholder}
                        customStyle={{ marginBottom: 6 }}
                        label={label}
                    />
                )}
                name={inputName}
            />

            {errors[inputName] && (<Text style={{ ...globalStyles.errorTxt, marginBottom: 6 }}>{errors[inputName].message}</Text>)}
        </>
    )
}


