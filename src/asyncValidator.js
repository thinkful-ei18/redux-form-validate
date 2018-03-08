import {SubmissionError} from 'redux-form'
export const serverValidate = value =>
  fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report',
  {
    method:'POST',
    body:JSON.stringify(value),
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(res => {
    if(!res.ok){
      if(res.headers.has('content-type')&&
          res.headers
            .get('content-type')
            .startsWith('application/json')){
        return res.json().then(err => Promise.reject(err))
      }
      return Promise.reject({
        code: res.status,
        message:res.statusText
      })
    }
    return
  })
  .catch(err => {
    const {reason, message, location} = err
    if(reason === 'ValidationError') {
      return Promise.reject(new SubmissionError({[location]: message}))
    }
    return Promise.reject(
      new SubmissionError({
        _error: 'Error submitting message'
      })
    );
  })
