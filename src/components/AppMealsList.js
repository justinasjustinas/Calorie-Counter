import React from 'react'

const AppMealsList = ({ meals, deleteMealHandler }) => {
 
  return (
    <div className='meals__list__wrapper'>
        {meals.map((meal, index) => {
           return <div key={index} className='meals__list__inner'>
                <div>{meal.mealName}: {meal.calories}</div>
                <div>
                    <button onClick={()=>deleteMealHandler(meal.id)}>Delete</button>
                </div>
            </div>
        })}

    </div>
  )
}

export default AppMealsList