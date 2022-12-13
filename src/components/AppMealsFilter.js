import React from 'react'

const AppMealsFilter = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className='meals__filter__container'>
        <select defaultValue={selectedFilter} onChange={(e)=> setSelectedFilter(e.target.value)}>
            <option value=''></option>
            <option value='Ascending'>Ascending</option>
            <option value='Descending'>Descending</option>
        </select>

    </div>
  )
}

export default AppMealsFilter;