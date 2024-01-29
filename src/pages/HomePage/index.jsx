import React from 'react'
import CategoryBanner from '../../components/categoryBanner'
import MainBanner from '../../components/MainBanner'
import DiscontBanner from '../../components/DiscontBanner'
// import CategoryItem from '../../components/CategoryItem';


export default function HomePage() {
  return (
    <div className='home_page'>
      <MainBanner />
      <CategoryBanner sliceLimit={4} />
      {/* <CategoryItem/> */}
      <DiscontBanner />

     </div>
  );
}
