export function favouritesReducer(state, action){
    switch(action.type){
        case 'favourites':
          return {fav: action.fav};
        default:
          return state
    }
}