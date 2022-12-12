import React from 'react'

const AppDelete = ({ deleteAllMeals }) => {
  return (
    <div className='delete'>
        <button className='btn__delete' onClick={() => deleteAllMeals()}>Delete All</button>
    </div>
  )
}

export default AppDelete;