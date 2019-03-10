export function searchReducer(state, action){
    switch(action.type){
        case 'search':
          return {value: action.input};
        case 'guests':
          return {guests: action.count};
        case 'price':
          return {price: action.price};
        default:
          return state
    }
}