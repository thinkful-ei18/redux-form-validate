import React from 'react'

export default class Input extends React.Component{
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
        this.input.focus();
    }
  } 
  render(){
    const Element = this.props.element || 'input'
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
        error = <div>{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
        warning = (
            <div>{this.props.meta.warning}</div>
        );
    }
    const theStyle={
      display:'block'
    }
    return(
      <div>
            <label htmlFor={this.props.name} style={theStyle}>
              {this.props.label}
              {error}
              {warning}
            </label>
            <Element
                {...this.props.input}
                id={this.props.input.name}
                type={this.props.type}
                ref={input => (this.input = input)}
              >
                {this.props.children}
             </Element>
      </div>
    )
  }
}