import React from 'react'
import Banner from '../components/Banner'
import HotelsPreview from '../components/HotelsPreview'


function Home() {
  return (
    <main>
      <Banner type='home'/>
      <HotelsPreview />
    </main>
  );
}

export default Home;
