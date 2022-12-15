import React,{useState} from "react";
import "./filter.css"
import icons from "../../assets/icons";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useFilterContext } from "./filter_context";


function Icon({ id, open }) {
  return (   
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`${
      id === open ? "rotate-45" : ""
    } h-5 w-5 transition-transform`}>
<path d="M8.15183 8.16369L8.15183 13.0422C8.15937 13.1447 8.12977 13.2294 8.06302 13.2962C7.99627 13.3629 7.90406 13.3925 7.7864 13.385C7.66873 13.3925 7.57653 13.3629 7.50978 13.2962C7.44302 13.2294 7.41342 13.1372 7.42096 13.0195L7.42096 8.16369L2.54249 8.16369C2.43991 8.17123 2.35336 8.13974 2.28284 8.06922C2.21232 7.9987 2.18083 7.90461 2.18837 7.78694C2.18045 7.6689 2.20987 7.57651 2.27662 7.50976C2.34337 7.44301 2.43577 7.41359 2.55381 7.42151L7.42096 7.43282L7.42096 2.55435C7.41342 2.45177 7.44284 2.36315 7.50921 2.28848C7.57596 2.21419 7.66836 2.181 7.7864 2.18892C7.90444 2.181 7.99683 2.21042 8.06358 2.27717C8.13033 2.34392 8.15975 2.43631 8.15183 2.55435L8.15183 7.43282H13.0303C13.1329 7.42528 13.2196 7.45281 13.2905 7.51541C13.361 7.57839 13.3923 7.6689 13.3844 7.78694C13.392 7.9046 13.3624 7.99681 13.2956 8.06356C13.2289 8.13031 13.1366 8.15992 13.019 8.15237L8.15183 8.16369Z" fill="white"/>
</svg>
 
  );
}

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
      <div className="filter__top flex justify-between items-center mb-5">       
        <h3 className="gallery__filter-title  w-full text-[2vw] font-anton font-[400] tracking-[-0.02em] leading-[100%]  text-white uppercase text-start">FILTERS ({filter_data.length})</h3>
        <button onClick={clearFilters} className="filter__btn-clear">
          Reset
        </button>
      </div>     
      <form onSubmit={(e) => e.preventDefault() } id='clearForm1' className="filter__text">
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__text-icon">{icons.search}</span>
          <input
          className="filter__text-inp text-white bg-transparent  border-none outline-none focus:outline-none focus:border-none ring-0 focus:right-0"
          type="text"
          name="text"
          placeholder="Search for Serial No."
          value={text}
          onChange={updateFilterValue}          
        />
          </div>     
      </form>
      

      {/* Checkbox search style   */}
     <>
     <Accordion open={open === 1} className="filter__acc" icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} >
          <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.styleIcon}</span>
          <span className="filter__accHead-title">Style</span>
          </div>
        </AccordionHeader>
        <AccordionBody>
       <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Style</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm2' >
        {styleData.map((curStyle  , i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curStyle}
                name="style"
                value={curStyle}                
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curStyle} className='filter__accBody-lvl'>{curStyle}</label>              
            </div>
          );
        })}
      </form>
       </div>
        </AccordionBody>
      </Accordion>
     </>
      {/* Checkbox search special */}
      <>
     <Accordion open={open === 2} className="filter__acc"  icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.special}</span>
          <span className="filter__accHead-title">Special</span>
          </div>
          
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Special</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm3'>
        {specialData.map((curSpecial, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curSpecial}
                name="special"
                value={curSpecial}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curSpecial}  className='filter__accBody-lvl'>{curSpecial}</label>             
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
       {/* Checkbox search clothing */}
       <>
     <Accordion open={open === 3} className="filter__acc" icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.clothing}</span>
          <span className="filter__accHead-title">Clothing</span>
          </div>
       
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Clothing</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm4'>
        {clothingData.map((curClothing, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curClothing}
                name="clothing"
                value={curClothing}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curClothing}  className='filter__accBody-lvl'>{curClothing}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search head */}
     <>
     <Accordion open={open === 4} className="filter__acc" icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.head}</span>
          <span className="filter__accHead-title">Head</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Head</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm5'>
        {headData.map((curHead, i) => {
          return (
            <div key={i}  className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curHead}
                name="head"
                value={curHead}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curHead} className='filter__accBody-lvl'>{curHead}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search hand */}
     <>
     <Accordion open={open === 5} className="filter__acc" icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.hand}</span>
          <span className="filter__accHead-title">Hand</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Hand</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm6'>
        {handData.map((curHand, i) => {
          return (
            <div key={i}  className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curHand}
                name="hand"
                value={curHand}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curHand} className='filter__accBody-lvl'>{curHand}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search neck */}
     <>
     <Accordion open={open === 6} className="filter__acc" icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.neck}</span>
          <span className="filter__accHead-title">Neck</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Neck</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm7'>
        {neckData.map((curNeck, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curNeck}
                name="neck"
                value={curNeck}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curNeck} className='filter__accBody-lvl'>{curNeck}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search face */}
     <>
     <Accordion open={open === 7} className="filter__acc" icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.face}</span>
          <span className="filter__accHead-title">Face</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Face</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm8'>
        {faceData.map((curFace, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curFace}
                name="face"
                value={curFace}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curFace} className='filter__accBody-lvl'>{curFace}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search eyes */}
     <>
     <Accordion open={open === 8} className="filter__acc" icon={<Icon id={8} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(8)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.eyes}</span>
          <span className="filter__accHead-title">Eyes</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Eyes</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm9'>
        {eyesData.map((curEyes, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curEyes}
                name="eyes"
                value={curEyes}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curEyes} className='filter__accBody-lvl'>{curEyes}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search ears */}
     <>
     <Accordion open={open === 9} className="filter__acc" icon={<Icon id={9} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(9)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.ears}</span>
          <span className="filter__accHead-title">Ears</span>
          </div>
      
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Ears</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm10'>
        {earsData.map((curEars, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curEars}
                name="ears"
                value={curEars}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curEars} className='filter__accBody-lvl'>{curEars}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search mouth */}
     <>
     <Accordion open={open === 10} className="filter__acc" icon={<Icon id={10} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(10)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.mouth}</span>
          <span className="filter__accHead-title">Mouth</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Mouth</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm11'>
        {mouthData.map((curMouth, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curMouth}
                name="mouth"
                value={curMouth}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curMouth} className='filter__accBody-lvl'>{curMouth}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
     {/* Checkbox search background */}
     <>
     <Accordion open={open === 11} className="filter__acc" icon={<Icon id={11} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(11)} >
        <div className=" flex justify-start items-center gap-2">
          <span className="filter__accHead-icon">{icons.background}</span>
          <span className="filter__accHead-title">Background</span>
          </div>
        
        </AccordionHeader>
        <AccordionBody>
        <div  className="filter__accBody flex flex-col  items-start gap-3  ">
       <span className="filter__accBody-title">Search for Background</span>
        <form onSubmit={(e) => e.preventDefault()} id='clearForm12'>
        {backgroundData.map((curBackground, i) => {
          return (
            <div key={i} className='flex justify-start items-center gap-2 '>
              <input
                className="filter__accBody-checkBox"
                type="checkbox"
                id={curBackground}
                name="background"
                value={curBackground}
                onChange={updateCheckedFilterValue}
              />
              <label htmlFor={curBackground}  className='filter__accBody-lvl'>{curBackground}</label>
              <br />
            </div>
          );
        })}
      </form>
      </div>
        </AccordionBody>
      </Accordion>
     </>
 
    </div>
  );
};

export default Filter;
