import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import './style.css'

const SocialNav = () => {
  const iconFb = <span className={'text-white text-3xl'}><FontAwesomeIcon icon={faFacebook} /></span>
  return (
    <ul>
      <li><a href="https://www.facebook.com/8milimetrostattoo">{iconFb}</a></li>
      <li><a href="https://wa.me/34622049666/?text=Hola"><i className="fab fa-whatsapp" /></a></li>
      <li><a href="https://www.instagram.com/8milimetrostattoo/"><i className="fab fa-instagram" /></a></li><a href="https://www.instagram.com/8milimetrostattoo/">
      </a><li><a href="https://www.instagram.com/8milimetrostattoo/" /><a href="tel:+34622049666"><i className="fas fa-phone-alt" /></a></li>
      <li><a href="https://www.google.com/maps/place/8+Mil%C3%ADmetros+Tattoo+piercing/@40.2842101,-3.7966662,15z/data=!4m5!3m4!1s0x0:0xf4d1786ee00e25ef!8m2!3d40.2842119!4d-3.7966659" target="_blank"><i className="fas fa-map-marker-alt" /></a></li>
    </ul>
  )
}

export default SocialNav
