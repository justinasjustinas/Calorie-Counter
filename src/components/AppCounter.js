import React from 'react'

const AppCounter = ({ totalCal }) => {
  return (
    <div className='counter'>
        <h2>Total calories: <span>{totalCal}</span></h2>
    </div>
  )
}

export default AppCounter;