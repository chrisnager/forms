import React from 'react'
import {Field, reduxForm} from 'redux-form'

const RowForm = ({handleSubmit, handleDelete, pristine, submitting, fields}) => (
  <form onSubmit={handleSubmit}>
    {fields.map(({name, placeholder}, index) =>(
      <Field
        key={index}
        name={name}
        placeholder={placeholder}
        component="input"
        type="text"
      />
    ))}

    <div style={{display: 'inline-block'}}>
      <button
        type="submit"
        disabled={pristine || submitting}
      >
        Save
      </button>
      <button
        type="button"
        disabled={pristine || submitting}
        onClick={handleDelete}
       >
        Delete
       </button>
    </div>
  </form>
)

export default reduxForm()(RowForm)
