import { createContext, useContext, useReducer, useEffect} from "react";
import reducer from "./filterReducer";
import GalleryCardData from "../galleryCard/galleryCardData";

const FilterContext = createContext();

const initialState = {
  page: "home",
  filter_data: [],
  all_data: GalleryCardData,
  filters: {
    text: "",
    style: [],
    special: [],
    clothing: [],
    head: [],
    hand: [],
    neck: [],
    face: [],
    eyes: [],
    ears: [],
    mouth: [],
    background: [],
  },
};

export const FilterContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // handle page 
  const handlePage = (page)=>{
    return dispatch({type: "HANDLE_PAGE", payload: page});
  }
  

  // update the filter values
  const updateFilterValue = (event) => {
    let { name, value} = event.target;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  
   // update the checked filter values
 const updateCheckedFilterValue = (event) => {
    let { name, value, checked } = event.target;

    return dispatch({ type: "UPDATE_CHECKED_FILTERS_VALUE", payload: { name,value,checked }});
  };
  
  // to clear the filter
  const clearFilters = (event) => {   
    dispatch({ type: "CLEAR_FILTERS" });
    document.getElementsByClassName("clearForm").reset();
  };
  
  
  // to sort the data
  useEffect(() => {
    dispatch({ type: "FILTER_DATA" });
  }, [state.filters]);
  // to load all the data for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA"});
  
  }, []);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        handlePage,
        updateFilterValue,
        updateCheckedFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
