import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppCounter from './components/AppCounter';
import AppDelete from './components/AppDelete';
import AppInput from './components/AppInput';
import AppMealsList from './components/AppMealsList';
import AppModal from './components/AppModal';
import AppMealsFilter from './components/AppMealsFilter';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('')

  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000)
    }
    const newMeals = oldMeals.concat(meal);

  (calories <= 0 || mealName === '') ? setOpenModal(true) : setMeals(newMeals);
  localStorage.setItem('meals',JSON.stringify(newMeals));
  setMealName('');
  setCalories(0);
  }

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
    localStorage.setItem('meals',JSON.stringify(newMeals));
  }

  const deleteAllMeals = () => {
    setMeals([]);
    localStorage.clear();
  }

  const totalCal =
  meals ? meals.map((meal) => meal.calories)
  .reduce((acc, val) => acc + +val, 0) : 0;

  useEffect(()=> {
    const oldState = [...meals];
    if (selectedFilter === 'Ascending') {
      const ascendingMeals = oldState.sort((a, b) => a.calories - b.calories);
      setMeals(ascendingMeals);
    }
    else if (selectedFilter === 'Descending') {
      const descendingMeals = oldState.sort((a, b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  }, [selectedFilter]); // it gives me a warning that there's a missing dependency 'meals'. However, if I add it, then it creates an infinite loop when I filter (and I exceed the limit, according to console). Thoughts?

  useEffect(() => {
    const localStorageMeals = JSON.parse(localStorage.getItem('meals'));
    setMeals(localStorageMeals);
  }, [setMeals]); // Also not 100% sure why we need to pass this particular dependency here.

  return (
    <div className="App">
      <AppHeader />
      <AppCounter totalCal={totalCal}/>
      <AppDelete deleteAllMeals={deleteAllMeals}/>
      {openModal ? <AppModal setOpenModal={setOpenModal} /> : ''}
      <AppInput addMealsHandler={addMealsHandler} mealName={mealName} calories={calories} setMealName={setMealName} setCalories={setCalories} />

      <div className='meals__container'>
        <AppMealsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
      </div>
    </div>
  );
}

export default App;