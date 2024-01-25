import { rootUrl, categoryUrl } from "../helpers";
import { CATEGORIES } from "../store/categoryReducer";


export const fetchCategories = () => {
  return (dispatch) => {
    fetch(`${rootUrl}${categoryUrl}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from server:", data); 
        dispatch({ type: CATEGORIES, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        console.log("Fetch completed"); 
      });
  };
};
