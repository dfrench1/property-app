import React from 'react'

const ImgModal = ({el}) => (
    <img
    src={`https://s3-eu-west-1.amazonaws.com/property-app-assets/${el}`}
    // onError={()=>this.img.style.opacity='0'}
    style={{ width: "200px", height: "100px", backgroundColor:'#E9E9E9' }}
    />
)

export default ImgModal