import React from 'react'
import { upperFirst, upperCase, head } from 'lodash'
const FieldText = ({ options, field, data, index }) => {
  const renderField = (options) => {
    if (options) {
      switch (head(Object.keys(options))) {
        case 'upperFirst':
          return upperFirst(data[field])
        case 'upperCase':
          return upperCase(data[field])
        case 'substring':
          return data[field].substring(0, options.substring.maxLength)
        default:
      }
    }
    if (options && options.transformValue) {
      return options.transformValue[data[field]]
    } else {
      return data[field]
    }
  }

  return (
    <td key={`field-text${index}`}>
      {renderField(options)}
      {(options && options.prefix && options.prefix) || ''}
    </td>
  )
}

export default FieldText
