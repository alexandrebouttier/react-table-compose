import React from 'react';
import { head } from 'lodash';

import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const FieldDate = ({ options, field, data, index }) => {
  const renderField = (options) => {
    if (options && options.dateFormat) {
      switch (head(Object.values(options))) {
        case 'LT':
          return moment(data[field]).format('LT');
        case 'LTS':
          return moment(data[field]).format('LTS');
        case 'L':
          return moment(data[field]).format('L');
        case 'l':
          return moment(data[field]).format('l');
        case 'LL':
          return moment(data[field]).format('LL');
        case 'll':
          return moment(data[field]).format('ll');
        case 'LLL':
          return moment(data[field]).format('LLL');
        case 'lll':
          return moment(data[field]).format('lll');
        case 'LLLL':
          return moment(data[field]).format('LLLL');
        case 'llll':
          return moment(data[field]).format('llll');
        default:
      }
    } else {
      return moment(data[field]).format();
    }
  };

  return <td key={index}>{renderField(options)}</td>;
};

export default FieldDate;
