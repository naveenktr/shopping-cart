import {
    ADD_TO_CART,
    FETCH_PRODUCTS,
    FETCH_PRODUCT_DETAILS,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY
  } from "./action-types";
  import axios from "axios";
  let initData = [];
  export const fetchProducts = () => async (dispatch) => {
    const url = "https://fakestoreapi.com/products";
    let data = "";
    axios
      .get(url)
      .then((response) => {
        data = response.data;
        initData = data;
        dispatch({
          type: FETCH_PRODUCTS,
          payload: data
        });
      })
      .catch((error) => console.error(error));
  };
  export const getProductDetails = (productId) => async (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_DETAILS,
      payload: productId
    });
  };
  export const getCart =()=>{
    return({
      type: "FETCH_CART"
    })
  }
  export const addToCart = (id, quantity) => {
    return {
      type: ADD_TO_CART,
      id,
      quantity
    };
  };
  //remove item action
  export const removeItem = (id) => {
    return {
      type: REMOVE_ITEM,
      id
    };
  };
  //subtract qt action
  export const subtractQuantity = (id) => {
    return {
      type: SUB_QUANTITY,
      id
    };
  };
  //add qt action
  export const addQuantity = (id) => {
    return {
      type: ADD_QUANTITY,
      id
    };
  };
  