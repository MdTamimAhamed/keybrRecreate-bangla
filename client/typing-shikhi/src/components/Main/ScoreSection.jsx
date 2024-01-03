import React, { useState, useEffect, useContext } from 'react'
import {LuSettings2} from 'react-icons/lu'
import KeyboardContext from '../../context/keyboardContext';

function ScoreSection() {

    const[toggleKeyboard, setToggleKeyboard] = useState(true)
    const {setKeyboardVisibility} = useContext(KeyboardContext);

    const handleKeyboard = ()=>{
        setToggleKeyboard(!toggleKeyboard);
        setKeyboardVisibility(toggleKeyboard);
    }

  return (
    <div className='w-full flex justify-between py-6 font-shiliguri font-medium text-text-clr'>
        <div className='flex'>
            <div>
                <p>Current key: <span className='text-light-green'>A</span></p>
                <p>Score: 300 <span className='text-light-green'>(<span>+</span>150)</span></p>
            </div>
            <div className='ml-32'>
                <p>Speed: 32.5 wpm <span className='text-light-green'>(<span>+</span>4.5 wpm)</span></p>
                <p>Accuracy: 90.5% <span className='text-light-green'>(<span>+</span>1.02%)</span> </p>
            </div>
        </div>

        
        <div>
            <span className='flex items-center font-shiliguri font-medium'>
                কিবোর্ড: 
                <div onClick={()=>handleKeyboard()} 
                     className={`relative  h-5 w-8 rounded-3xl ml-2 bg-light-green cursor-pointer ${!toggleKeyboard &&'bg-red-500'}`}>
                    <span className={`absolute top-[50%] ${!toggleKeyboard? 'left-1':'right-1'} 
                    translate-y-[-50%] h-3 w-3 bg-white rounded-full transition-all ease-linear duration-300`}></span>
                </div>
            </span>
            <div className='flex items-center'>
                <p>Advance Options</p><LuSettings2 className='text-light-green font-black'/>
            </div>
        </div>

    </div>
  )
}

export default ScoreSection