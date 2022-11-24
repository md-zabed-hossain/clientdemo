// import { Button } from "@material-tailwind/react";
import React from "react";
import { useFilterContext } from "./filter_context";

const Filter = () => {
  const {
    filter_data,
    all_data,
    filters: { text, special },
    updateFilterValue,
    // updateCheckedFilterValue,
    // clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "special") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = [...new Set(newVal)]);
  };
  // we need to have the individual data of each in an array format
  const specialData = getUniqueData(all_data, "special");

  console.log(filter_data);

  return (
    <div>
    <> <h3>FILTERS ({filter_data.length})</h3></>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="text-black"
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
          
        />    
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        {specialData.map((curSpecial, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={special}
                name="special"                
                value={curSpecial}
                onChange={updateFilterValue}
                // checked={specialData.indexOf() === -1 ?false :true}
              />    
              <br />                  
              <label htmlFor={special}>{curSpecial}</label>            
              <br />
            </div>
          );
        })}

      </form>
    </div>
  );
};

export default Filter;
