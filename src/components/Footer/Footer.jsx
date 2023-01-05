import React from 'react'
import Logo from '../../assets/logo.png'
import{
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
}from "@heroicons/react/outline"

import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
         <hr/>
         <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt=""/>
                <span>Amazon</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        
                        <LocationMarkerIcon className={css.icon}></LocationMarkerIcon>
                        <span>111 north avenue Orlando FL 32801</span>
                        
                    </span>
                    <span className={css.pngLine}>
                        
                        <PhoneIcon className={css.icon}></PhoneIcon>
                        <span>333-0290-8768</span>
                        
                    </span>
                    <span className={css.pngLine}>
                        
                        <InboxIcon className={css.icon}></InboxIcon>
                        <span>help@Amazon.com</span>
                        
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        
                        <LoginIcon className={css.icon}></LoginIcon>
                        <span>Sign in</span>
                        
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        
                        <UsersIcon className={css.icon}></UsersIcon>
                        <span>About us</span>
                        
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        
                        <LinkIcon className={css.icon}></LinkIcon>
                        <span>Saftey&Terms</span>
                        
                    </span>
                </div>
            </div>

         </div>
    </div>
  )
}

export default Footer