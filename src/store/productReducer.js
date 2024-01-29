import { rootUrl, productUrl } from "../helpers";

const defaultstate = {
  rootUrl,
  productUrl,
  products: [],
};

export const PRODUCTS = "PRODUCTS";

export const productReducer = (state = defaultstate, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
