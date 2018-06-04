import React from 'react';

export default function PasswordInput(props) {
    const { input, ...inputProps } = props;

    return (
        <input type="password"
               value={input.value}
               onChangeText={input.onChange}
        />
    );
}