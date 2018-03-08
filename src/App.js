import React, { Component } from 'react';
import './App.css';
import Input from './components/input'
import {reduxForm,Field,SubmissionError, focus} from 'redux-form'
import {required,noEmpty, tooShort, isNumber} from './validators'
import {serverValidate} from './asyncValidator'
import{TextField} from 'material-ui/TextField'
import Textinput from './components/textInput'
export class App extends Component {
  submitMe(value){
    return serverValidate(value)
  }
  render() {
    let successMessage;
    if(this.props.submitSucceeded){
      successMessage = <div>Complaint successfully submitted</div>
    }
    let errorMessage;
    if(this.props.error){
      errorMessage = <div>{this.props.error}</div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Report problem with your delivery</h1>
          <form onSubmit={this.props.handleSubmit(value =>(this.submitMe(value)))}>
            <Field 
              component={Textinput}
              label="tracking number"
              name="trackingNumber"
              // validate={[required,noEmpty,tooShort,isNumber]}
            />
            <Field
              component={Input}
              label="what is your issue"
              name="issue"
              element='select'>
                <option>
                </option>
                <option value="not-delivered">
                  My delivery has not arrived
                </option>
                <option value="wrong-item">
                  The Wrong item was delivered
                </option>            
                <option value="missing-part">
                  Part of my order is missing
                </option>            
                <option value="damaged">
                  Some of my order arrived damaged
                </option>
                <option value="other">
                  Other(give more detail)
                </option>
            </Field>
            <Field 
              component={Input}
              label="Give it more detail(optional)"
              name="details"
              element="textarea"
              />
            <div className="form-control">
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                {successMessage}
                {errorMessage}
            </div>
        </form>
        </header>
        
      </div>
    );
  }
}

export default reduxForm({
  form:'complaint'
})(App)
