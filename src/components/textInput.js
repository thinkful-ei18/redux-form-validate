import React from 'react'
import TextField from 'material-ui/TextField'
export default function Textinput(props){
    console.log(props)
    return(
        <TextField 
        hintText={props.label}
        floatingLabelText={props.label}
        errorText={props.meta.touch && props.meta.error}
        {...props}
        />
    )
}
