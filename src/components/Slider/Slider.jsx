import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Navigation} from 'swiper'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './Slider.css'
import {SliderProducts} from '../../data/products'

const Slider = () => {
  return (
    <div className="s-container" >

        <Swiper 
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={40}
        sliderPerGroup={1}
        loopFillGroupWithBlank={true}
        loop={true}
        breakpoints={{
          640:{
            slidesPerView:3,
          },
          0:{
            slidesPerView:1
          }
        }}
        >
             {SliderProducts.map((slide,i)=>(
                <SwiperSlide>
                   <div className='left-s'>
                        <div className="name">
                            <span>{slide.name}</span>  
                            <span>{slide.detail}</span> 
                        </div>  
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>  
                        
                    </div> 
                <img src={slide.img} alt="product" className='img-p'/> 
                </SwiperSlide>
             ))}
           
        </Swiper>
  
    </div>
  )
}

export default Slider