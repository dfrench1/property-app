import React from 'react'

const ImgModal = ({el}) => (
    <img
    src={`https://s3-eu-west-1.amazonaws.com/property-app-assets/${el}`}
    style={{ width: "200px", height: "100px" }}
    />
)

export default ImgModal