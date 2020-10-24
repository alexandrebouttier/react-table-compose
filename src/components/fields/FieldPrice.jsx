import React from 'react';
import { isNaN } from 'lodash';

const FieldPrice = ({ options, field, data, index }) => {
  const renderField = (options) => {
    if (!isNaN(data[field]) && options && options.decimal) {
      switch (options.decimal) {
        case 1:
          return Number(data[field]).toFixed(1);
        case 2:
          return Number(data[field]).toFixed(2);
        case 3:
          return Number(data[field]).toFixed(3);
        case 4:
          return Number(data[field]).toFixed(4);
        case 5:
          return Number(data[field]).toFixed(5);
        case 6:
          return Number(data[field]).toFixed(6);
        default:
      }
    } else {
      return data[field];
    }
  };

  return (
    <td key={`field-price${index}`}>
      {renderField(options)}
      {options && options.currency && options.currency}
    </td>
  );
};

export default FieldPrice;
