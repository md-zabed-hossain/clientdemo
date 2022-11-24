import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./filterReducer";
import GalleryCardData from "../galleryCard/galleryCardData";

const FilterContext = createContext();

const initialState = {
  filter_data: [],
  all_data: GalleryCardData,
  filters: {
    text: "",
    special: [],
  },
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
    // update the checked filter values
    const updateCheckedFilterValue = (event) => {
      let {name,value,checked,type} = event.target;
      // let value = event.target.value;
      // let checked = event.target.checked;
      console.log(name,value,checked,type)
  
      // return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    // dispatch({ type: "LOAD_FILTER_DATA"});
  }, [state.filters]);
  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA"});
  }, []);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilterValue,
        updateCheckedFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
