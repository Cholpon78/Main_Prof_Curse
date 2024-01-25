import { rootUrl, categoryUrl, } from "../helpers";

const defaultstate = {
  rootUrl,
  categoryUrl,
  categories: [],
};

export const CATEGORIES = "CATEGORIES";

export const categoryReducer = (state = defaultstate, action) => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};



