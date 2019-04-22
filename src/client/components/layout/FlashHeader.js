import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { setRedirectFlash } from "../../redux/actions";
import {FlashStyle} from './styled'
function FlashHeading (props) {
  useEffect(() => {
    setTimeout(()=> {
        props.setRedirectFlash(null)
    }, 3000)
  })
  return props.flash 
  ? <FlashStyle>{props.flash}</FlashStyle> 
  : <React.Fragment />
};

const mapStateToProps = state => ({
  flash: state.flash
});
const mapDispatchToProps = dispatch => {
    return {
      setRedirectFlash: message => dispatch(setRedirectFlash(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashHeading);
