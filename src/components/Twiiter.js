import React from 'react'
import CreateTweet from './CreateTweet'
import  Post from "./Posts"
import Trends from './Trends'

const Twiiter = () => {
  return (
    <div className='posts'>
      <div className='posts__home'>Home</div>
      <CreateTweet/>
      <Post/>
      <Trends/>      
    </div>
  )
}

export default Twiiter