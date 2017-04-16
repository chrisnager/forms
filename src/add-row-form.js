import React from 'react'
import {Field, reduxForm} from 'redux-form'

const renderField = ({name, label, placeholder}) => (
  <label style={{display: 'inline-block'}}>
    <div>{label}</div>
    <input
      name={name}
      label={label}
      placeholder={placeholder}
      type="text"
    />
  </label>
)

const AddRowForm = ({handleSubmit, pristine, submitting, fields}) => (
  <form onSubmit={handleSubmit}>
    {fields.map(({name, label, placeholder}, index) =>(
      <Field
        key={index}
        name={name}
        label={label}
        placeholder={placeholder}
        type="text"
        component={renderField}
      />
    ))}

    <div style={{display: 'inline-block'}}>
      <button type="submit" disabled={pristine || submitting}>Add</button>
    </div>
  </form>
)

export default reduxForm()(AddRowForm)
