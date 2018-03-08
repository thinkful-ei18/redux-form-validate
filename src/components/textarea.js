import React from 'react'
import {reduxForm, Field} from 'redux-form'

export default class TextArea extends React.Component{
  
  render(){
    const theStyle={
      display:'block'
    }
    return(
      <div>
        <label htmlFor={this.props.name} style={theStyle}>{this.props.label}</label>
        <textarea name={this.props.name} id={this.props.name}>
        </textarea>
      </div>
    )
  }
}