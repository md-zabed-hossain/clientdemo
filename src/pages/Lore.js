import React, { useEffect} from 'react'
import { Header, Heading, ExploreSec, WallSec, LoreCard1, LoreCard2 } from "../components";
import { useFilterContext } from "../components/filter/filter_context";

const Lore = () => {
  const {handlePage,page} = useFilterContext();
  useEffect(() => {
  handlePage('lore')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 
  return (
    <>
    <div>
      <Header page={page} />
    </div>
    <div>
      <Heading page={page}  />
    </div>
    <div>
      <ExploreSec page={page} />
    </div>
    <div>
      <LoreCard1 />
    </div>
    <div>
      <LoreCard2 />
    </div>
    <div>
      <WallSec page={page} />
    </div>   
  </>
  )
}

export default Lore