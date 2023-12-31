import React, { useState } from 'react'
import ProgressBoard from '../components/Main/ProgressBoard'
import Keyboard from '../components/Main/Keyboard'
import TypingArea from '../components/Main/TypingArea'

function Practice() {

  return (
    <div className='h-[85vh] bg-forground rounded-xl mt-6'>
      <div className='px-32'>
          <ProgressBoard/>  
          <TypingArea/>
          <Keyboard/>
      </div>
    </div>
  )
}

export default Practice