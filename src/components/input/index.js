import React from 'react'

const Input = ({
  name = '',
  label = '',
  type = 'text',
  className = '',
  placeholder = '',
  value = '',
  onChange = () => null,
  isRequired = true
}) => {
  return (
    <div class={`mb-4 ${className}`}>
      {(
        label &&
        <label class='block text-gray-700 text-sm font-bold mb-2' for={name}>
          {label}
        </label>
      )}
      <input class={`shadow apperance-none border w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-outline ${className}`} value={value} onChange={onChange} id={name}
        type={type} placeholder={placeholder} required={isRequired} />
    </div>
  )
}

export default Input