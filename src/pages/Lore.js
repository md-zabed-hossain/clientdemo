import React, { useEffect, useState } from 'react'
import { Footer, Header, Heading, ExploreSec, WallSec, LoreCard1, LoreCard2 } from "../components";

const Lore = () => {
  const [page,setPage] = useState(null);
  useEffect(() => {
    setPage("lore")
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
    <div>
      <Footer />
    </div>
  </>
  )
}

export default Lore