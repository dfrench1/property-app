import React, { useState, useEffect, useReducer } from "react";
import Search from "./search";
import PropertyCard from "./propertyCard";
import Filters from "./filters";
import Favourites from './favouritesWidget';
import { searchReducer } from "../../redux/hooksReducers/search";
import { favouritesReducer } from '../../redux/hooksReducers/favourites'
import {fetchProperties} from './functions/FetchProperties'
import {addFavourite} from './functions/AddFavourite'
import { ContentWrap, SearchWrap, SideBarWrap } from "./styled";
import {FoldingCube} from 'styled-spinkit'
export const FavContext = React.createContext();

function Dashboard(props) {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(props.user);
  const [favs, initialFav] = useState(null)
  const [newFav, setFave] = useState(null);
  const [fav, setFav] = useReducer(favouritesReducer, { fav: null });
  const [state, setSearch] = useReducer(searchReducer, { value: "" });
  const [count, setCount] = useReducer(searchReducer, { guests: 1 });
  const [price, setPrice] = useReducer(searchReducer, { price: [10, 150] });

  useEffect(() => {
      fetchProperties(setData)
      !props.user && setUser(null)
  }, [props.user]);

  const favouriteMethod = (data) => {
    addFavourite(data, setFave, user)
  }

  return (  
    data ? (
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
    ) :  <FoldingCube color={'darkred'} size={80} />  
  );
}

export default Dashboard;