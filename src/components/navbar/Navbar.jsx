import React from 'react'
import reactLogo from '../../images/logo.png'
import colors from '../../colors/colors'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='main'>
        <div className='nav_left_content'>
        <div className='nav_logo_text' style={{ color: colors.primary }} >
          TeachVisita
        </div>
        </div>

        <div className='nav_right_content'>
            <div className='nav_text' style={{ color: colors.primary }} >Home</div>
            <div className='nav_text' style={{ color: colors.primary }} >Service</div>
            <div className='nav_text' style={{ color: colors.primary }} >Contact us</div>
            <div className='nav_btn' >Free demo for you</div>{' '}
        </div>
      
    </div>
  )
}

export default Navbar
