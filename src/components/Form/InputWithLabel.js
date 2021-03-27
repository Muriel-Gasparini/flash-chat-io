import React from 'react'
import { FormGroup, FormLabel } from 'react-bootstrap'

function InputWithLabel({ label, placeholder, onChange, inputType }) {
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <input
        className="form-control"
        placeholder={placeholder}
        type={inputType}
        onChange={onChange}
      />
    </FormGroup>
  )
}

export { InputWithLabel }