import React from 'react'
import TextField from 'material-ui/TextField'
export default function TextInput({multiLine,input, label,meta,...rest}){
    return(
        <TextField 
        {...input}
        {...rest}
        multiLine={multiLine}
        fullWidth={true}
        hintText={label}
        floatingLabelText={label}
        errorText={meta.touched && meta.error}
        />
    )
}
