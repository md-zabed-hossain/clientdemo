import React, { useState } from "react";
import "./galleryCard.css";
import GalleryCardData from "./galleryCardData.js";
import {  Card } from "@material-tailwind/react";
import GalleryCardDialog from "./GalleryCardDialog";

const CardUI = () => {
  const [open, setOpen] = useState("");

  const handleOpen = () => setOpen(!open);
  const [id, setID] = useState("");
 
  return (
    <Card className={`flex bg-dark flex-wrap  cursor-pointer flex-row gap-10`} >
      {GalleryCardData.map((item, index) => (
      <div key={index}>
      <div className="cursor-pointer " onClick={() => {
              setOpen(true);
              setID(item.id);
             
            }} >
          <img src={item.img} alt=""  />
          <span>sea</span>
          <h4>NO. {item.id}</h4>
        
         
        </div>
         <GalleryCardDialog
            open={open}
            handler={handleOpen}
            id={id}           
          />
      </div>
      ))}
    </Card>
  );
};
export default CardUI;
