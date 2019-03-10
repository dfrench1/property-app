import React, {useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import Title from "../title";
import Rooms from '../rooms';
import Guests from '../guests';
import Price from '../price'
import {Link} from 'react-router-dom'
import { CardWrap } from "./styled";

import Loading from '../../loading/Loading'

const CardImage = Loadable({
    loader: () => import('../image'),
    loading: () => <Loading />,
  });

function Card ({el, searchVal}) {
    return (
        <Link 
          to={{pathname: `/property/${el.title.replace(/\s/g, '-')}`, data: el}}
        >
        <CardWrap>
            <CardImage data={el} />
            <Title data={el} highlight={el.title.toLowerCase().includes(searchVal.value.toLowerCase()) && searchVal.value !== ''  ? true : false} />
            <div>
              <Rooms data={el} />
              <Guests data={el} />
            </div>
            <Price data={el}/>
        </CardWrap>
        </Link>
    );
};

Card.propTypes = {
    el: PropTypes.object
};

export default Card;