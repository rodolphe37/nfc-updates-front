import React from 'react';

const UserTitle = ({ record }) => (
  <span>
    {' '}
    {record ? `"${record.name}"` : ''}
  </span>
);
export default UserTitle;
