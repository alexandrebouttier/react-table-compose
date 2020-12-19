import React from 'react'

const FieldPercentage = ({ field, data, index }) => {
  return <td key={`field-percentage${index}`}>{data[field]}%</td>
}

export default FieldPercentage
