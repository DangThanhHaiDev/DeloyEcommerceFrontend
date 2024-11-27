import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
    const items = MainCarouselData.map((item, index)=>{        
        return <img key={index} src={item.image} className='cursor-pointer m-auto -z-10' role='presentation' width='70%'/>
    })
    return(
    <AliceCarousel
        infinite
        items={items}
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls
    />)
}

export default MainCarousel