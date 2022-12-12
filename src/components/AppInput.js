import React from 'react'

const AppInput = ({ addMealsHandler, mealName, calories, setMealName, setCalories }) => {
const onAddMealsClick = () => {
    addMealsHandler();
}

  return (
    <div className='controls'>
        <div className='controls__input'>
            <input type='text' placeholder='Meal' value={mealName} onChange={(e)=>setMealName(e.target.value)} />
            <input type='' placeholder='Calories' value={calories} onChange={(e)=>setCalories(e.target.value)} min={(0)} />
            <button onClick={onAddMealsClick}>Add Meal</button>
        </div>
    </div>
  )
}

export default AppInput