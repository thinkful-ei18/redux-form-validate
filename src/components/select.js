import React from 'react'
import {reduxForm, Field} from 'redux-form'

export default class Select extends React.Component{
  
  render(){
    const theStyle={
      display:'block'
    }
    return(
      <div>
        <label htmlFor={this.props.name} style={theStyle}>{this.props.label}</label>
        <select name={this.props.name} id={this.props.name}>

        </select>
      </div>
    )
  }
}