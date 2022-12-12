import React from 'react'

const AppModal = ({ setOpenModal }) => {
  return (
    <div className='modal'>
        <h3>Meal Name cannot be left blank and Calories have to be more than zero.</h3>
        <button onClick={() => setOpenModal(false)}>Close</button>
    </div>
  )
}

export default AppModal;