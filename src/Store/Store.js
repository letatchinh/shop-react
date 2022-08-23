import { configureStore } from "@reduxjs/toolkit";

const initValue = {
  create: {
    name: "",
    price: "",
    image: "",
  },
  list: [],
  listCart: [],
  subTotalBill : 0
};
const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "CHANGENAME":
      return {
        ...state,
        create: { ...state.create, name: action.payload },
      };
    case "CHANGEPRICE":
      return {
        ...state,
        create: { ...state.create, price: action.payload },
      };
    case "CHANGEIMAGE":
      return {
        ...state,
        create: { ...state.create, image: action.payload },
      };
    case "CALLAPI":
      return {
        ...state,
        list: action.payload,
      };
    case "CALLAPILISTCART":
      return {
        ...state,
        listCart: action.payload,
      };
      case "ADDCART":
     
        return {
          ...state  , listCart : [...state.listCart,action.payload]
        }
        case "DELETECART" : 
    
        return {
          ...state , listCart : state.listCart.filter(e => e.id !== action.payload)
        }
        case "INCREASECOUNT" :
          return {
            ...state , listCart : state.listCart.map((e,i) => (i === action.payload) ? {...e,count : e.count + 1} : e)
          }
        case "DECREASECOUNT" :
          return {
            ...state , listCart : state.listCart.map((e,i) => (i === action.payload) ? {...e,count : e.count - 1} : e)
          }
          case "SUBTOTALBILL" :
            return {
              ...state , subTotalBill : state.listCart.reduce(((sum,cur) => sum + cur.price * cur.count),0)
            }
    default:
      return state;
  }
};
export const changeData = (type2, data) => {
  return {
    type: type2,
    payload: data,
   
  };
}

const store = configureStore({ reducer: rootReducer });
export default store;
