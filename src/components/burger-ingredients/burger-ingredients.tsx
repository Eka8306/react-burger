import React from 'react';
import './burger-ingredients.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import ProductList from './product-list';


function BurgerIngredients() {

  const [current, setCurrent] = React.useState('Булки')

  return (

      <div className="Ingredients-column">
        
          <p className="text text_type_main-large">
              Соберите бургер
          </p>

          <div style={{ display: 'flex' }}>
              <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                  Булки
              </Tab>
              <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                  Соусы
              </Tab>
              <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                  Начинки
              </Tab>
          </div>

          <div className="Ingredients-scroll">
              <ProductList listType={'bun'}/>
              <ProductList listType={'sauce'}/>
              <ProductList listType={'main'}/>
          </div>

      </div>
  );
}


export default BurgerIngredients;