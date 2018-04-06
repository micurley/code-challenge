import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './Search.css';

const Search = ({onChange, is_set}) => {
  let input;
  const submitSearchTerm = () => {
    onChange(input.value);
  };

  const clearSearch = () => {
    input.value = '';
    onChange('');
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search github users"
        ref={ref => (input = ref)}
      />
      <div className="icon">
        {is_set ? (
          <FontAwesome name="close" size="2x" onClick={clearSearch} />
        ) : (
          <FontAwesome name="search" size="2x" onClick={submitSearchTerm} />
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  is_set: PropTypes.string,
};

export default Search;
