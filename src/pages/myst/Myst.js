import React from 'react'
import { Footer } from '../../components';
import { BsArrowLeft } from 'react-icons/bs';
import "./myst.css";
import { Link } from 'react-router-dom';

const Myst = () => {
  return (
    <>
    <div className='myst'>
    <Link to={'/gallery'}><BsArrowLeft/>Go Back</Link>
    {/* <a href></a> */}
    <div>
      <p>You peek into the myst. you begin to feel something strange. Visions Flood your mind. You see Asia, you see people. you see life.</p>
    </div>

    </div>
     <div>
        <Footer />
      </div>
    </>
  )
}

export default Myst