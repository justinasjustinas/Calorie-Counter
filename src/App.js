import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppCounter from './components/AppCounter';
import AppDelete from './components/AppDelete';
import AppInput from './components/AppInput';
import AppMealsList from './components/AppMealsList';
import AppModal from './components/AppModal';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const addMealsHandler = () => {
    const oldMeals = [...meals];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000)
    }
    const newMeals = oldMeals.concat(meal);

  (calories <= 0 || mealName === '') ? setOpenModal(true) : setMeals(newMeals);
  setMealName('');
  setCalories(0);
  }

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
  }

  const deleteAllMeals = () => {
    setMeals([]);
  }

  const totalCal =
  meals.map((meal) => meal.calories)
  .reduce((acc, val) => acc + +val, 0);

  return (
    <div className="App">
      <AppHeader />
      <AppCounter totalCal={totalCal}/>
      <AppDelete deleteAllMeals={deleteAllMeals}/>
      {openModal ? <AppModal setOpenModal={setOpenModal} /> : ''}
      <AppInput addMealsHandler={addMealsHandler} mealName={mealName} calories={calories} setMealName={setMealName} setCalories={setCalories} />

      <div className='meals__container'>
        <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
      </div>
    </div>
  );
}

export default App;