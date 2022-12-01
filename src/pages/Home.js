import React, { useEffect } from "react";
import { Header, Heading, ExploreSec, WallSec } from "../components";
import { useFilterContext } from "../components/filter/filter_context";

const Home = () => {
  const {handlePage} = useFilterContext();
  useEffect(() => {
  handlePage('home')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Heading />
      </div>
      <div>
        <ExploreSec />
      </div>
      <div>
        <WallSec />
      </div>    
    </>
  );
};

export default Home;
