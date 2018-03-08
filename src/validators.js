export const required = value => value? undefined: 'Required!'
export const noEmpty = value => value.trim() === '' ? "Can't fill with white space" : undefined
export const tooShort = value => value.length === 5? undefined : "must be 5 in length"
export const isNumber = value =>{
  return !isNaN(value)?undefined:"input should only contain number"
}