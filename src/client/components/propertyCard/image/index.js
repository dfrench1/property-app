import React from 'react';
import PropTypes from 'prop-types';
import FavBtn from '../../favouritesBtn'
import {ImgStyle} from './styled'
import FadeIn from "react-lazyload-fadein";

const Image = ({data}) => {
    return (
      <FadeIn 
        height={400} 
        duration={100}
      >
        {onload => (
        <React.Fragment>
          <ImgStyle
            key={data._id}
            src={`https://s3-eu-west-1.amazonaws.com/airbnb-assets/${data.images[0]}`}
           
            onLoad={onload}
          />
          <FavBtn data={data} />
         </React.Fragment>
        )}
      </FadeIn>
    );
};

Image.propTypes = {
    
};

export default Image;