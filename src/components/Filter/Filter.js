// import React from 'react';

import PropTypes from 'prop-types';
import { Label } from '../Form/Form.styled';

export const Filter = ({ filter, filterContact }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={filterContact}
      />
    </Label>
  );
};

Label.propTypes = {
  filter: PropTypes.string,
};