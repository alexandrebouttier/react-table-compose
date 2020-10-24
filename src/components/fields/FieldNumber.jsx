import React from 'react';
import { isNaN } from 'lodash';

const FieldNumber = ({ options, field, data, index }) => {
  const renderField = (options) => {
    if (!isNaN(data[field]) && options && options.decimal) {
      switch (options.decimal) {
        case 1:
          return data[field].toFixed(1);
        case 2:
          return data[field].toFixed(2);
        case 3:
          return data[field].toFixed(3);
        case 4:
          return data[field].toFixed(4);
        case 5:
          return data[field].toFixed(5);
        case 6:
          return data[field].toFixed(6);
        default:
      }
    } else {
      return data[field];
    }
  };

  return <td key={`field-number${index}`}>{renderField(options)}</td>;
};

export default FieldNumber;
