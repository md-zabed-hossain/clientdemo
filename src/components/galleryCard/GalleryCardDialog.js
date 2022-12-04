import React from "react";
import { Button, Dialog } from "@material-tailwind/react";
import GalleryCardData from "./galleryCardData.js";


const GalleryCardDialog = (props) => {
  // const [open, setOpen] = useState(props.open);
  // const handleOpen1 = () => setOpen(!open);

  for (var x = 0; x < GalleryCardData.length; x++) {
    if (props.id === GalleryCardData[x].id) {
      // console.log(GalleryCardData[x])
      var dialogData = 
       ( <div className="flex">
          <img src={GalleryCardData[x].img} alt=""/>
          <div className="flex flex-wrap">
          <span>sea</span>
          <h4>{GalleryCardData[x].id}</h4>
          <p>{GalleryCardData[x].desc.toUpperCase()}</p>
          <>{GalleryCardData[x].style.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</>
          <span>{GalleryCardData[x].special.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].clothing.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].head.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].hand.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].neck.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].face.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].eyes.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].ears.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].mouth.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          <span>{GalleryCardData[x].background.map((item,i)=>(<span key={i}>{item.toUpperCase()}</span>))}</span>
          </div>
        </div>)
   ;
     
    }
  }

  return (
    <Dialog
      {...props}
      animate={{
        mount: { scale: 1, bottom: -200 ,},
        unmount: { scale: 0.9, bottom: 200 },
      }}
     
      className="bg-white object-bottom  ease-in "
    >
      {dialogData}
    
      <Button onClick={props.handleOpen} className="top-5 right-5 absolute">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 12L2.08301 20.917C1.94434 21.0557 1.77767 21.132 1.58301 21.146C1.38901 21.16 1.22234 21.0837 1.08301 20.917C0.916341 20.7777 0.833008 20.618 0.833008 20.438C0.833008 20.2573 0.916341 20.0837 1.08301 19.917L10 11L1.08301 2.08301C0.944341 1.94434 0.868008 1.77767 0.854008 1.58301C0.840008 1.38901 0.916341 1.22234 1.08301 1.08301C1.22234 0.916341 1.38201 0.833008 1.56201 0.833008C1.74267 0.833008 1.91634 0.916341 2.08301 1.08301L11 10L19.917 1.08301C20.0557 0.944341 20.2223 0.868008 20.417 0.854008C20.611 0.840008 20.7777 0.916341 20.917 1.08301C21.0837 1.22234 21.167 1.38234 21.167 1.56301C21.167 1.74301 21.0837 1.91634 20.917 2.08301L12 11L20.917 19.917C21.0557 20.0557 21.132 20.2223 21.146 20.417C21.16 20.611 21.0837 20.7777 20.917 20.917C20.7777 21.0837 20.618 21.167 20.438 21.167C20.2573 21.167 20.0837 21.0837 19.917 20.917L11 12Z" fill="black"/>
</svg>

      
      </Button>
    </Dialog>
  );
};

export default GalleryCardDialog;
