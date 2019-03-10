import React, { useState, useEffect, useReducer } from "react";
import Search from "../../components/search";
import PropertyCard from "../../components/propertyCard";
import Filters from "../../components/filters";
import Favourites from '../../components/favouritesWidget';
import { searchReducer } from "../../redux/reducers/search";
import { favouritesReducer } from '../../redux/reducers/favourites'
import {verifyToken} from '../../functions/VerifyToken'
import {fetchProperties} from '../../functions/FetchProperties'
import {addFavourite} from '../../functions/AddFavourite'
import { ContentWrap, SearchWrap, SideBarWrap } from "./styled";
import Layout from '../../components/layout/index'
import {FoldingCube} from 'styled-spinkit'
export const FavContext = React.createContext();

function Dashboard(props) {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [favs, initialFav] = useState(null)
  const [newFav, setFave] = useState(null);
  const [fav, setFav] = useReducer(favouritesReducer, { fav: null });
  const [state, setSearch] = useReducer(searchReducer, { value: "" });
  const [count, setCount] = useReducer(searchReducer, { guests: 1 });
  const [price, setPrice] = useReducer(searchReducer, { price: [10, 150] });

  useEffect(() => {
      verifyToken(window, setUser)
      fetchProperties(setData)
  }, []);

  const favouriteMethod = (data) => {
    addFavourite(data, setFave, user)
  }

  return (  
    data ? (
      // <Layout component={<React.Fragment>
      <React.Fragment>
        <ContentWrap>
        <SideBarWrap>
          <SearchWrap>
            <Search searchMethod={setSearch} />
          </SearchWrap>
          <Filters
            guestMethod={setCount}
            guests={count.guests}
            priceMethod={setPrice}
            price={price}
          />
          {user && <Favourites data={!newFav ? user.fav : newFav} property={data} />}
        </SideBarWrap>
          <FavContext.Provider value={{addFav: favouriteMethod, loggedIn: user }}>
            <PropertyCard
              data={data}
              searchVal={state}
              guests={count.guests}
              slider={price}
            />
          </FavContext.Provider>
        </ContentWrap>
        </React.Fragment>
        /* </React.Fragment>} user={user} /> */
    ) :  <FoldingCube color={'#ADD8E6'} size={80} />  
  );
}

export default Dashboard;