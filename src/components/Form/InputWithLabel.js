import React from 'react'
import { FormGroup, FormLabel } from 'react-bootstrap'

function InputWithLabel({ label, placeholder, onChange, inputType, required, min, max, className }) {
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <input
        className={className || "form-control"}
        placeholder={placeholder}
        type={inputType}
        onChange={onChange}
        required={required}
        max={max}
        min={min}
      />
    </FormGroup>
  )
}

export { InputWithLabel }