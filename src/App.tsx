import React from 'react';
import './App.css';
import Header from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'; 

function App() {
  return (
    <div className="App">

	  <Header />

    <main className="App-Column">
      <BurgerIngredients />
      <div style={{ height: 40, width: 44 }}/>
      <BurgerConstructor />

    </main>

    </div>
  );
}

export default App;
