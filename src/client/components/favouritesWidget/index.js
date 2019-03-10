import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {FavWrap, FavUl, FavLi} from './styled'

const Favourites = ({data, property}) => {
    return (
        <FavWrap>
          <h4>Favourites</h4>
          {Object.entries(data).length > 0 ?
           <FavUl>
            {Object.values(data).map(el => {
              const matchProp = property.find(item => item.title == el)
              return (
              <Link to={{pathname: `/property/${el.replace(/\s/g, '-')}`, data: matchProp}}>
                <FavLi>{el}</FavLi>
              </Link>
              )

            })}
          </FavUl> :
          <div>no favourites added yet...</div>}
        </FavWrap>
     

    );
};

Favourites.propTypes = {
    
};

export default Favourites;