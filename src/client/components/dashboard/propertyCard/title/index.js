import React from 'react';
import PropTypes from 'prop-types';
import { TitleStyle } from './styled';

const Title = ({data, highlight}) => {
    return (
        <TitleStyle 
         key={data._id}
         highlight={highlight}
         >
         {data.title}
        </TitleStyle>
    );
};

Title.propTypes = {
    
};

export default Title;