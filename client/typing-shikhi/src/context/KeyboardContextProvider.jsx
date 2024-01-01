import React, { useState, useEffect } from 'react'
import KeyboardContext from './KeyboardContext'

const KeyboardContextProvider = ({children}) =>{

    const [keyboardVisibility, setKeyboardVisibility] = useState(null);

    return(
      <KeyboardContext.Provider value={{keyboardVisibility, setKeyboardVisibility}}>
        {children}
      </KeyboardContext.Provider>
    )
}

export default KeyboardContextProvider