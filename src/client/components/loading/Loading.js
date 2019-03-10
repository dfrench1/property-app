import React from 'react';
import PropTypes from 'prop-types';
import {LoadingContainer} from './styled'
import {FoldingCube} from 'styled-spinkit'

const Loading = props => {
    return (
        <LoadingContainer>
           <FoldingCube color={'#ADD8E6'} size={80} />
        </LoadingContainer>
    );
};

Loading.propTypes = {
    
};

export default Loading;