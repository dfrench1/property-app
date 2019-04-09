import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {FavBtnHeart} from './styled';
import {FavContext} from '../index';

const FavBtn = ({data}) => {
  const context = useContext(FavContext);
    return (
        context.loggedIn &&
        <FavBtnHeart 
          onClick={(e) => { 
            context.addFav({type: "favourite", fav: {propID: data._id, title: data.title}}) 
            e.preventDefault();
          }}
        />
    );
};

FavBtn.propTypes = {
    
};

export default FavBtn;