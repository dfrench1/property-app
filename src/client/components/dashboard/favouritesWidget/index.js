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
            {Object.entries(data).map(el => {
              const matchProp = property.find(item => item._id == el[0])
              return (
              <Link 
                to={{pathname: `/property/${el[0]}`, state: {data: matchProp}}}
                key={el}
              >
                <FavLi>{el[1]}</FavLi>
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