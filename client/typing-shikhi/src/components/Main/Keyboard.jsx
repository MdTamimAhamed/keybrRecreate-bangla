import React, { useState, useEffect, useContext } from 'react'
import KeyboardNumericalBtn from '../Reuseable/KeyboardNumericalBtn'
import KeyboardAlphaBtn from '../Reuseable/KeyboardAlphaBtn';
import KeyboardContext from '../../context/keyboardContext';

function Keyboard() {

    const {keyboardVisibility} = useContext(KeyboardContext);
    const [pressedKey, setPressedKey] = useState(null);

    const shiftKeys = ['`','!','@','#','$','%','^','&','*','(',')','_','+']
    const directKeys =['~','1','2','3','4','5','6','7','8','9','0','-','=','Backspace']
    const tabRow = ['Tab','Q','W','E','R','T','Y','U','I','O','P','[ {','] }',"\\  |"]
    const caplocksRow = ['CapsLock','A','S','D','F','G','H','J','K','L','; :','"\  \'',"Enter"]
    const shiftRow = ['Shift','Z','X','C','V','B','N','M',', <','. >','/  ?','Shift']
    const spaceRow = ['Ctrl', 'Win','Alt','Space','Alt','Win','Ctrl']

    const tabRowDirectKeys = ['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']',"\\"]
    const caplocksRowDirectKeys = ['CapsLock','A','S','D','F','G','H','J','K','L',';',"'","Enter"]
    const shiftRowDirectKeys = ['Shift','Z','X','C','V','B','N','M',',','.','/','Shift']
    const spaceRowDirectKeys = ['Control', 'Meta','Alt',' ','Alt','Meta','Control']
    const extraKeys = ['{','}','"\\',':','"','<','>','?']

    function handlePressKey(e){
      let filter = null;
      console.log(`Pressed: ${e.key}`)
      e.preventDefault();
      if(e.key === 'Tab'
        || e.key === 'Backspace' 
        || e.key === 'CapsLock' 
        || e.key === 'Enter'
        || e.key === 'Shift' 
        || e.key === 'Control'
        || e.key === 'Alt'
        || e.key === 'Meta'
        || e.key === ' '){
        setPressedKey(e.key);
      }
      else{
        setPressedKey(e.key.toUpperCase());
      }
    }

    function handleReleaseKey(){
      setPressedKey(null);
    }

    useEffect(()=>{
      window.addEventListener('keydown', handlePressKey);
      window.addEventListener('keyup', handleReleaseKey);

      return () => {
        window.addEventListener('keydown', handlePressKey);
        window.addEventListener('keyup', handleReleaseKey);
      }
    },[])



  return (
    <div className={`w-[65%] h-62 mx-auto bg-background ${!keyboardVisibility? 'flex':'hidden'} flex-col gap-y-2 rounded-md font-shiliguri p-2 font-medium text-light-text`}>
        <div className='flex justify-between items-center'>
          {directKeys.map((item,index) => (
            <KeyboardNumericalBtn
              key={index}
              shiftKey={shiftKeys[index]}
              directKey={directKeys[index]}
              isPressed = {pressedKey === shiftKeys[index] || pressedKey === directKeys[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {tabRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              rawName="tabRow"
              tabRow={tabRow[index]}
              isPressed = {pressedKey === tabRowDirectKeys[index] || pressedKey === extraKeys[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {caplocksRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              rawName = "caplocksRow"
              caplocksRow={caplocksRow[index]}
              isPressed = {pressedKey === caplocksRowDirectKeys[index] || pressedKey === extraKeys[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {shiftRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              rawName = "shiftRow"
              shiftRow={shiftRow[index]}
              isPressed = {pressedKey === shiftRowDirectKeys[index] || pressedKey === extraKeys[index]}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {spaceRow.map((item,index) => (
            <KeyboardAlphaBtn
              key={index}
              rawName = "spaceRow"
              spaceRow={spaceRow[index]}
              isPressed = {pressedKey === spaceRowDirectKeys[index]}
            />
          ))}
        </div>

    </div>
  )
}

export default Keyboard