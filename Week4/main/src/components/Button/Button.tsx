import React from 'react'
import { ButtonProps } from './Button.types'
import { Textarea } from '..'

export const Button: React.FC<ButtonProps> = ({ children, label, ...restProps }) => {
  return (
    <div>
      <label>{label}</label>
      <button {...restProps}>
        {children}
      </button>
    </div>
  )
}