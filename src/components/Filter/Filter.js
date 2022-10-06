import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ handleChange, filter }) => (
  <Label>
    Find contacts by Name
    <input onChange={handleChange} type="text" name="filter" value={filter} />
  </Label>
);

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
