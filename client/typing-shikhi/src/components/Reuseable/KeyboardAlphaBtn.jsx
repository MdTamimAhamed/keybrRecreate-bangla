import React from 'react'

function KeyboardAlphaBtn({rawName, tabRow, caplocksRow, shiftRow, spaceRow}) {
  let tabRowComponent = null
  let caplocksRowComponent = null
  let shiftRowComponent = null
  let spaceRowComponent = null

  if(rawName === "spaceRow"){
    spaceRowComponent = (
      <div
        className={`
        ${(spaceRow === "Space") && 'w-[480px]'}
         bg-forground h-10 w-12 rounded leading-3 flex justify-center items-center`}>
          <p>{spaceRow}</p>
        </div>
    )
  }

  if(rawName === "shiftRow"){
    shiftRowComponent = (
      <div
        className={`
        ${(shiftRow === "Shift") && 'w-32'}
         bg-forground h-10 w-12 rounded leading-3 flex justify-center items-center`}>
          <p>{shiftRow}</p>
        </div>
    )
  }

  if(rawName === "caplocksRow"){
    caplocksRowComponent = (
      <div
        className={`
        ${(caplocksRow === "CapLocks" || caplocksRow === "Enter") && 'w-24'}
         bg-forground h-10 w-12 rounded leading-3  flex justify-center items-center`}>
          <p>{caplocksRow}</p>
        </div>
    )
  }

  if(rawName === "tabRow"){
    tabRowComponent = (
      <div
        className={`
        ${(tabRow === "Tab" || tabRow === "\\|") && 'w-20'}
        bg-forground h-10 w-12 rounded leading-3 flex justify-center items-center`}>
          <p>{tabRow}</p>
        </div>
    )
  }
  return (
    <>
      {tabRowComponent}
      {caplocksRowComponent}
      {shiftRowComponent}
      {spaceRowComponent}
    </>
  )
}

export default KeyboardAlphaBtn