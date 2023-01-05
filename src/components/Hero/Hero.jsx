import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';

const Hero = () => {
  return (
      <div className={css.container}>
        {/* left side */}
          <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection Cream</span>
              <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>Seedily say has suitable disposal and boy. Excercise joy man children rejoiced</span>
              </div>
          </div>

          {/* middle side hero image */}
          <div className={css.wrapper}>
            <div className={css.blueCircle}>
              <img src={HeroImg} className={css.heroimage} alt='' width={600}/>
            </div>
          </div>
          {/* Right Side */}
          <div className={css.h_sides}>
            <div className={css.traffic}>
              <span>1.5m</span>
              <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
              <span>100K</span>
              <span>Happy customers</span>
            </div>
          </div>
      </div>
  )
}

export default Hero