import React, { Component } from 'react';
import './App.css';
import {reduxForm,Field,SubmissionError, focus} from 'redux-form'
import {required,noEmpty, tooShort, isNumber} from './validators'
import {serverValidate} from './asyncValidator'
import SelectInput from './components/selectInput'
import MenuItem from 'material-ui/MenuItem'
import TextInput from './components/textInput'
import RaisedButton from 'material-ui/RaisedButton'
export const App = ({submitSucceeded,error,handleSubmit,pristine, submitting})=>{

  const submitMe =(value)=> serverValidate(value)
  const btnStyle={
    margin:'15px 0 15px 0',
    textAlign:'center'
  }
  let successMessage;
  if(submitSucceeded){
    successMessage = <div>Complaint successfully submitted</div>
  }
  let errorMessage;
  if(error){
    errorMessage = <div>{error}</div>
  }
  const myStyle={
    fontSize:'18px'
  }
  return (
    <div className="App">
      <header>
        <h2 >Report problem with your delivery</h2>
        <form onSubmit={handleSubmit(value =>(submitMe(value)))}>
          <div>
          <Field
            label="tracking number"
            name="trackingNumber"
            type="text"
            component={TextInput}
            style={myStyle}
            validate={[required,noEmpty,tooShort,isNumber]}
          />
          </div>
          <div>
            <Field
              style={myStyle}
              component={SelectInput}
              label="what is your issue"
              name="issue">
                <MenuItem value="not-delivered" primaryText="not-delivered"/>
                <MenuItem value="wrong-item" primaryText="wrong-item" />
                <MenuItem value="missing-part" primaryText="missing-part"/>
                <MenuItem  value="damaged" primaryText="damaged"/>
                <MenuItem value="other" primaryText="other"/>
            </Field>
          </div>

          <Field 
            style={myStyle}
            component={TextInput}
            multiLine={true}
            label="Give it more detail(optional)"
            name="details"
            />
          <div>
              <RaisedButton label="Submit" primary={true} style={btnStyle}
              fullWidth={true}
              type="submit" disabled={pristine || submitting} />
              {successMessage}
              {errorMessage}
          </div>
      </form>
      </header>
    </div>
  )
}

export default reduxForm({
  form:'complaint'
})(App)
