const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_DATA":
      return {
        ...state,

        //   filter_data: [...action.payload],
        //   all_data: [...action.payload],
        //   filters: { ...state.filters,},
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      // let checkedData = [...state.filters.special]
      // if(checked){
      //  return {...state,
      //   filters: {
      //     ...state.filters,
      //     [name]:(value),
      //   },
      // }}

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_data } = state;
      let tempFilterProduct = [];
      // special

      const { text } = state.filters;

      if (text) {
        tempFilterProduct = [...all_data];
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          // if (curElem.id === text)  return curElem;
        
            return curElem.id.includes(text);
        
        });
      }

      // if (special) {
      //   tempFilterProduct = [...all_data];
      //   tempFilterProduct = tempFilterProduct.filter((curElem) => {
      //     return curElem.special.includes(special);
      //   });
      // }

      return {
        ...state,
        filter_data: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
