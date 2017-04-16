import React, {Component} from 'react'
import AddRowForm from './add-row-form'
import RowForm from './row-form'
import showResults from './show-results'
import forms from './forms'

class App extends Component {
  handleDeleteRow = () => {
    alert('Row deleted.')
  }

  render() {
    return (
      <div>
        {forms.map(({form, head, body, initialValues}, index) => (
          <div key={index}>
            <h1>{form} priority</h1>

            {head && (
              <AddRowForm
                form={`add-row-${form.toLowerCase()}`}
                fields={head.fields}
                onSubmit={showResults}
              />
            )}

            {body.map(({fields, initialValues},  index) => (
              <RowForm
                key={index}
                form={`row-${form.toLowerCase()}`}
                fields={fields}
                initialValues={initialValues}
                onSubmit={showResults}
                onDelete={this.handleDeleteRow}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default App
