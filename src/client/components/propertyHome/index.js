import React from 'react';
import PropTypes from 'prop-types';
import Rooms from '../../components/propertyCard/rooms'
import Guests from '../../components/propertyCard/guests'
import Price from '../../components/propertyCard/price'
import Gallery from '../../components/modalGallery';
import {ImgStyle, PropertyWrap, PropertyInfo} from './styled'

const Property = ({data}) => {
    let arr=[];
    let newArray = Object.values(data.images).map(item => (
        arr.push({gallery_image: {url: `${process.env.S3_URL}${item}`}})
    ))
    return (
        <React.Fragment>
        <PropertyWrap>
            <Gallery gallery={[{items: arr}]} /> 
            <PropertyInfo> 
              <h4>{data.title}</h4>
              <div>
              <Rooms data={data}/>
              <Guests data={data}/>
              </div>
              <Price data={data}/>
            </PropertyInfo> 
        </PropertyWrap>
   
        </React.Fragment>
    );
};

Property.propTypes = {
    
};

export default Property;