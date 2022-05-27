import React from 'react'
import {FaRegCheckCircle,FaComment,FaRegChartBar,
FaHeart,FaLeaf} from "react-icons/fa"
const Posts = () => {
  return (
    <div className='postss'>
       <div className='postss__first'>
           <div className='posts__first__img'>
               <img src='image/twitter.jpg' alt='' />
           </div>
           <div className='posts__first__name'>
              <strong>Gabriel Custodio</strong>  <FaRegCheckCircle className="verify"/>
           </div>
           <div className='posts__first__username'>
               @custido97 <span>6m</span>
           </div>
           <div className='postss__details__msg'>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
           </div>
           <div className='postss__details__img'>
               <img src='/image/window.jpg' alt='post'/>
           </div>
           <div className='reactions'>
               <span>
                   <FaComment className='re' />45
               </span>
               <span>
                   <FaRegChartBar className='re'/>4
               </span>
               <span>
                   <FaHeart className='re'/>345
               </span>
               <span>
                   <FaLeaf className='re'/> 234
               </span>
           </div>
       </div>
    </div>
  )
}

export default Posts