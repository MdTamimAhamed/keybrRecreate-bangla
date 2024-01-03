import React, { useState, useEffect } from 'react'

function UnlockKeys() {

    const keyList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const[incr_index, set_incr_index] = useState(3)
    let i = 50;
    useEffect(() => {
        
        if(i == 50){
            set_incr_index(10);
        }

    }, [i])
    


  return (
    <div>
        <div className='flex items-center pt-10 font-shiliguri font-medium'>
            <span className='text-text-clr'>Keys:</span>
            <ul className='w-full flex justify-start px-4'>
                {
                    keyList.map((item, index)=>(
                        <li key={index}
                            className={`${(index <= incr_index)? 'bg-light-green text-text-clr':'text-light-text'} w-8 h-7 bg-background 
                                        flex justify-center items-center rounded-sm mx-1`}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default UnlockKeys