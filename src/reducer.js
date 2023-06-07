export const initialState = {
cart: [],
    
  };
  
  export const cartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price+ amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "addToCart":
            return{
                ...state,
                cart:[...state.cart,action.item]
            };




      case "removefromcart":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.text === action.text
      );
      let newcart = [...state.cart];

      if (index >= 0) {
        newcart.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.text}) as its not in basket!`
        )
      }

      return {
        ...state,
        cart: newcart
      }
case 'setuser':
  return {
    ...state,
    user: action.user
  }





      default:
        return state;
    }
  };
  
  export default reducer;