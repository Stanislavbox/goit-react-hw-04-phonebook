import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

function Filter({ filter, handleFilterChange }) {
  return (
    <>
      <label className={css.filter_label} htmlFor="example filter">Find contacts by name</label>
      <input
      className={css.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;