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
            src={process.env.S3_URL}
            //data.images[0]
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