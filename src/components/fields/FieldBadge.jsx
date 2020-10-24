import React from 'react';

import { Badge } from 'reactstrap';

const FieldBadge = ({ options, field, data, index }) => {
  const renderField = (value, options) => {
    if (options && options.badge) {
      const primary = options.badge.primary;
      const secondary = options.badge.secondary;
      const success = options.badge.success;
      const danger = options.badge.danger;
      const warning = options.badge.warning;
      const info = options.badge.info;
      const light = options.badge.light;
      const dark = options.badge.dark;

      if (value === primary) {
        return <Badge color='primary'>{data[field]}</Badge>;
      }
      if (value === secondary) {
        return <Badge color='secondary'>{data[field]}</Badge>;
      }
      if (value === success) {
        return <Badge color='success'>{data[field]}</Badge>;
      }
      if (value === danger) {
        return <Badge color='danger'>{data[field]}</Badge>;
      }
      if (value === warning) {
        return <Badge color='warning'>{data[field]}</Badge>;
      }
      if (value === info) {
        return <Badge color='info'>{data[field]}</Badge>;
      }
      if (value === light) {
        return <Badge color='light'>{data[field]}</Badge>;
      }
      if (value === dark) {
        return <Badge color='dark'>{data[field]}</Badge>;
      }
    } else {
      return <Badge color='primary'>{data[field]}</Badge>;
    }
  };

  return (
    <td key={`field-badge${index}`}>{renderField(data[field], options)}</td>
  );
};

export default FieldBadge;
