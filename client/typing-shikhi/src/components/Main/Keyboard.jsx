import React, { useState, useEffect, useContext } from 'react'
import KeyboardNumericalBtn from '../Reuseable/KeyboardNumericalBtn'
import KeyboardAlphaBtn from '../Reuseable/KeyboardAlphaBtn';
import KeyboardContext from '../../context/KeyboardContext';

function Keyboard() {

    const[key, setKey] = useState(null);
    const {keyboardVisibility} = useContext(KeyboardContext); 

    const shiftKeys = ['`','!','@','#','$','%','^','&','*','(',')','_','+']
    const directKeys =['~','1','2','3','4','5','6','7','8','9','0','-','=','Backspace']
    const tabRow = ['Tab','Q','W','E','R','T','Y','U','I','O','P','[ {','] }',"\\  |"]
    const caplocksRow = ['CapLocks','A','S','D','F','G','H','J','K','L','; :','"\  \'',"Enter" ]
    const shiftRow = ['Shift','Z','X','C','V','B','N','M',',','.','/  ?','Shift']
    const spaceRow = ['Ctrl', 'Win','Alt','Space','Alt','Win','Ctrl']


    //get keyboard key - on key down
    useEffect(() => {
      const handleKeyDown = (e) => {
        setKey(e.key);
      };

      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };

    }, []); 


  return (
    <div className={`w-[65%] h-62 mx-auto bg-gray-800 ${!keyboardVisibility? 'flex':'hidden'} flex-col gap-y-2 rounded-md font-shiliguri p-2 font-medium text-light-text`}>
        <div className='flex justify-between items-center'>
          {directKeys.map((item,index) => (
            <KeyboardNumericalBtn
              key={index}
              state={key}
              shiftKey={shiftKeys[index]}
              directKey={directKeys[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {tabRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              state={key}
              rawName="tabRow"
              tabRow={tabRow[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {caplocksRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              state={key}
              rawName = "caplocksRow"
              caplocksRow={caplocksRow[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {shiftRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              state={key}
              rawName = "shiftRow"
              shiftRow={shiftRow[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {spaceRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              state={key}
              rawName = "spaceRow"
              spaceRow={spaceRow[index]}
            />
          ))}
        </div>

    </div>
  )
}

export default Keyboard