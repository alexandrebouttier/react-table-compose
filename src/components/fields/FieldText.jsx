import React from 'react';
import { upperFirst, upperCase, head } from 'lodash';
const FieldText = ({ options, field, data, index }) => {
  const renderField = (options) => {
    if (options) {
      switch (head(Object.keys(options))) {
        case 'upperFirst':
          return upperFirst(data[field]);
        case 'upperCase':
          return upperCase(data[field]);
        default:
      }
    }
    if (options && options.transformValue) {
      return options.transformValue[data[field]];
    } else {
      return data[field];
    }
  };

  return <td key={`field-badge${index}`}>{renderField(options)}</td>;
};

export default FieldText;
