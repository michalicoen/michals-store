import { configureStore } from '@reduxjs/toolkit';

const initialState = {
	cartItemsIds: [],
  cartItemsCount: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
      if (state.cartItemsCount[action.payload.id]) {
        return {
          ...state,
          cartItemsCount: {
            ...state.cartItemsCount,
            [action.payload.id]: state.cartItemsCount[action.payload.id] + 1
          }
        }
      }
			return {
				...state,
				cartItemsIds: [...state.cartItemsIds, action.payload.id],
        cartItemsCount: {
          ...state.cartItemsCount,
          [action.payload.id]: 1,
        }
			};
		case 'REMOVE_FROM_CART':
      if(state.cartItemsCount[action.payload.id] > 1){
        return{
          ...state,
          cartItemsCount: {
            ...state.cartItemsCount,
            [action.payload.id]: state.cartItemsCount[action.payload.id] - 1
          }
        }
      }
			return {
				...state,
				cartItemsIds: state.cartItemsIds.filter(
					(id) => id !== action.payload.id
				),
        cartItemsCount: {
          ...state.cartItemsCount,
          [action.payload.id]: 0
        }
			};
      case 'REMOVE_ITEM_FROM_CART': // הוספת מקרה חדש
      return {
        ...state,
        cartItemsIds: state.cartItemsIds.filter((id) => id !== action.payload.id),
        cartItemsCount: {
          ...state.cartItemsCount,
          [action.payload.id]: 0,
        },
      }
		default:
			return state;
	}
};

const store = configureStore({
	reducer,
});

export default store;
