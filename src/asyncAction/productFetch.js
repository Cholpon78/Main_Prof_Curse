import { rootUrl, productUrl } from "../helpers";
import { PRODUCTS } from "../store/categoryReducer";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch(`${rootUrl}${productUrl}`)
      .then(res=> res.json())
      .then((data) => {
        console.log("Product from server:", data);
        dispatch({ type: PRODUCTS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        console.log("Fetch completed");
      });
  };
};
