import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {SearchStyle} from './styled'

function Search ({searchMethod}) {
    return (
          <SearchStyle
            placeholder="Search by title"
            onChange={(e) => searchMethod({type: 'search', input: e.target.value})}
          />
    );
};

Search.propTypes = {
    searchMethod: PropTypes.func
};

export default Search;