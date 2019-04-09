import React from "react";
import PropTypes from "prop-types";
import Rooms from "../../../components/dashboard/propertyCard/rooms";
import Guests from "../../../components/dashboard/propertyCard/guests";
import Price from "../../../components/dashboard/propertyCard/price";
import Gallery from "../modalGallery";
import Map from "../../generic/map";
import { ImgStyle, PropertyWrap, InfoWrap, PropertyInfo } from "./styled";

const Property = ({ data }) => {
  let arr;
  if (data.images) {
    arr = [];
    let newArray = data.images.map(item =>
      arr.push({
        gallery_image: {
          url: `https://s3-eu-west-1.amazonaws.com/property-app-assets/${item}`
        }
      })
    );
  }
  return (
    <PropertyWrap>
      {data.images && <Gallery gallery={[{ items: arr }]} />}
      <InfoWrap>
        <Map coords={data.coords} price={data.price} />
        <PropertyInfo>
          <tbody>
          <tr>
            <th>{data.title}</th>
          </tr>
          <tr>
            <td>
              <Rooms data={data} />
            </td>
          </tr>
          <tr>
            <td>
              <Guests data={data} />
            </td>
          </tr>
          <tr>
            <td>
              <Price data={data} />
            </td>
          </tr>
          </tbody>
        </PropertyInfo>
      </InfoWrap>
    </PropertyWrap>
  );
};

Property.propTypes = {};

export default Property;
