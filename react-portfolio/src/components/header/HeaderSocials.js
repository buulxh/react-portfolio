import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" className='_blank'><BsLinkedin/></a>
      <a href="https://github.com" className='_blank'><FaGithub/></a>
      <a href="https://dribbble.com" className='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
