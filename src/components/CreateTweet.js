/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {FaRegImage,FaRegListAlt,FaRegSmile,FaCalendarCheck} from "react-icons/fa"
const CreateTweet = () => {
  return (
    <div className='create'>
      <div className='create__firts'>
           <div className='create__img'>
            <img src='/image/twitter.jpg' alt='profile image'/>
            </div>
          <div className='create__input'>
          <input type="text" className='create__control' placeholder="What' s happing?"/>
      </div>
        
      </div>
      <div className='create__second'>
            <div className="create__icons">
              <FaRegImage className='ic'/>
              <FaRegListAlt className='ic'/>
              <FaRegSmile className='ic'/>
              <FaCalendarCheck className='ic'/>
            </div>
            <div className='create__btn'>
                <a href='#'>Tweet</a>
            </div>
        </div>
    </div>
  )
}

export default CreateTweet