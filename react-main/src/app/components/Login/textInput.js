import React from 'react';

export default function TextInput(props) {
    const { input, ...inputProps } = props;

    return (
      <input type="text"
        value={input.value}
        onChangeText={input.onChange}
      />
    );
}