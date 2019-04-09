import React from "react";
import PropTypes from "prop-types";
import { LoadingContainer } from "./styled";
import { FoldingCube } from "styled-spinkit";

const Loading = ({ size, container }) => {
  let loading;
  container
    ? (loading = (
        <LoadingContainer>
          <FoldingCube color={"darkred"} size={size ? size : 80} />
        </LoadingContainer>
      ))
    : (loading = <FoldingCube color={"darkred"} size={size ? size : 80} />);
  return loading;
};

Loading.propTypes = {};

export default Loading;
