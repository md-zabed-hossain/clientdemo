import React,{useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useFilterContext } from "./filter_context";

const Filter = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  let {
    filter_data,
    all_data,
    filters: { text },
    updateFilterValue,
    updateCheckedFilterValue,
    clearFilters,
  } = useFilterContext();


  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "style") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    if (attr === "special") {
      newVal = newVal.flat();
    }
    if (attr === "clothing") {
      newVal = newVal.flat();
    }
    if (attr === "head") {
      newVal = newVal.flat();
    }
    if (attr === "hand") {
      newVal = newVal.flat();
    }
    if (attr === "neck") {
      newVal = newVal.flat();
    }
    if (attr === "face") {
      newVal = newVal.flat();
    }
    if (attr === "eyes") {
      newVal = newVal.flat();
    }
    if (attr === "ears") {
      newVal = newVal.flat();
    }
    if (attr === "mouth") {
      newVal = newVal.flat();
    }
    if (attr === "background") {
      newVal = newVal.flat();
    }

    return (newVal = [...new Set(newVal)]);
  };
  // we need to have the individual data of each in an array format
  const styleData = getUniqueData(all_data, "style");
  const specialData = getUniqueData(all_data, "special");
  const clothingData = getUniqueData(all_data, "clothing");
  const headData = getUniqueData(all_data, "head");
  const handData = getUniqueData(all_data, "hand");
  const neckData = getUniqueData(all_data, "neck");
  const faceData = getUniqueData(all_data, "face");
  const eyesData = getUniqueData(all_data, "eyes");
  const earsData = getUniqueData(all_data, "ears");
  const mouthData = getUniqueData(all_data, "mouth");
  const backgroundData = getUniqueData(all_data, "background");

 
      
  return (
    <div>
      <>
       
        <h3>FILTERS ({filter_data.length})</h3>
      </>
      <form onSubmit={(e) => e.preventDefault() }>
        <input
          className="text-black"
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
        />
      </form>
      <button onClick={clearFilters}>
          Reset
        </button>

      {/* Checkbox search style   */}
     <>
     <Accordion open={open === 1} >
        <AccordionHeader onClick={() => handleOpen(1)} >
          Style
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {styleData.map((curStyle  , i) => {
          return (
            <div key={i}>
              <input
                className="text-white"
                type="checkbox"
                id={curStyle}
                name="style"
                value={curStyle}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curStyle}>{curStyle}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
      {/* Checkbox search special */}
      <>
     <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} >
          Special
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {specialData.map((curSpecial, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curSpecial}
                name="special"
                value={curSpecial}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curSpecial}>{curSpecial}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
       {/* Checkbox search clothing */}
       <>
     <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} >
        Clothing
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {clothingData.map((curClothing, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curClothing}
                name="clothing"
                value={curClothing}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curClothing}>{curClothing}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search head */}
     <>
     <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)} >
        Head
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {headData.map((curHead, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curHead}
                name="head"
                value={curHead}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curHead}>{curHead}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search hand */}
     <>
     <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)} >
        Hand
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {handData.map((curHand, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curHand}
                name="hand"
                value={curHand}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curHand}>{curHand}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search neck */}
     <>
     <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)} >
        Neck
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {neckData.map((curNeck, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curNeck}
                name="neck"
                value={curNeck}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curNeck}>{curNeck}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search face */}
     <>
     <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)} >
        Face
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {faceData.map((curFace, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curFace}
                name="face"
                value={curFace}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curFace}>{curFace}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search eyes */}
     <>
     <Accordion open={open === 8}>
        <AccordionHeader onClick={() => handleOpen(8)} >
        Eyes
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {eyesData.map((curEyes, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curEyes}
                name="eyes"
                value={curEyes}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curEyes}>{curEyes}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search ears */}
     <>
     <Accordion open={open === 9}>
        <AccordionHeader onClick={() => handleOpen(9)} >
      Ears
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {earsData.map((curEars, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curEars}
                name="ears"
                value={curEars}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curEars}>{curEars}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search mouth */}
     <>
     <Accordion open={open === 10}>
        <AccordionHeader onClick={() => handleOpen(10)} >
        Mouth
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {mouthData.map((curMouth, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curMouth}
                name="mouth"
                value={curMouth}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curMouth}>{curMouth}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search background */}
     <>
     <Accordion open={open === 11}>
        <AccordionHeader onClick={() => handleOpen(11)} >
        Background
        </AccordionHeader>
        <AccordionBody>
        <form onSubmit={(e) => e.preventDefault()}>
        {backgroundData.map((curBackground, i) => {
          return (
            <div key={i}>
              <input
                className="text-black"
                type="checkbox"
                id={curBackground}
                name="background"
                value={curBackground}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curBackground}>{curBackground}</label>
              <br />
            </div>
          );
        })}
      </form>
        </AccordionBody>
      </Accordion>
     </>
 
    </div>
  );
};

export default Filter;
