import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT_DETAILS,
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY
  } from "../actions/action-types";
  
  export const productsReducer = (
    state = { items: [], addedItems: [] },
    action
  ) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
      return { ...state, items: action.payload };
      case FETCH_PRODUCT_DETAILS:
        return {
          ...state,
          item: state.items.find(
            (item) => Number(item.id) === Number(action.payload)
          )
        };
      case ADD_TO_CART:
        {
          debugger;
          let addedItem = state.items.find((item) => item.id === action.id);
          //check if the action id exists in the addedItems
          let existed_item = state.addedItems.find(
            (item) => action.id === item.id
          );
          console.log("reducer add to cart", state, existed_item);
  
          if (existed_item) {
            console.log("reducer add to cart existed", existed_item);
            addedItem.quantity += 1;
            return {
              ...state,
              total: state.total + addedItem.price
            };
          } else {
            console.log("reducer add to cart existed else", addedItem);
            addedItem.quantity = Number(action.quantity);
            //calculating the total
            let newTotal = state.total + addedItem.price;
  
            return {
              ...state,
              addedItems:[...state.addedItems,addedItem],
              total: newTotal
            };
          }
        }
        break;
      case REMOVE_ITEM:
        {
          let itemToRemove = state.addedItems.find(
            (item) => action.id === item.id
          );
          let new_items = state.addedItems.filter(
            (item) => action.id !== item.id
          );
  
          //calculating the total
          let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
          console.log(itemToRemove);
          return {
            ...state,
            addedItems: new_items,
            total: newTotal
          };
        }
        break;
      case ADD_QUANTITY:
        debugger;
          let addedItem = state.items.find((item) => item.id === action.id);
          addedItem.quantity += 1;
          let newTotal = state.total + addedItem.price;
          return {
            ...state,
            addedItems:[...state.addedItems,addedItem],
            total: newTotal
          };
        break;
      case SUB_QUANTITY:
        {
          debugger;
          let addedItem = state.items.find((item) => item.id === action.id);
          //if the qt == 0 then it should be removed
          if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(
              (item) => item.id !== action.id
            );
            let newTotal = state.total - addedItem.price;
            return {
              ...state,
              addedItems: new_items,
              total: newTotal
            };
          } else {
            console.log(addedItem)
            addedItem.quantity -= 1;
            console.log(addedItem)
            let newTotal = state.total - addedItem.price;
            return {
              ...state,
              addedItems:[...state.addedItems,addedItem.quantity],
              total: newTotal
            };
          }
        }
        break;
      case "FETCH_CART" :{
        return state;
      }
      break;
      default:
        return state;
    }
  };
  