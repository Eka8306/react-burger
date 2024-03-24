import React from 'react';
import data from '../../utils/data.json';
import './burger-constructor.css';
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {

  const bunTop = data.find(item => item._id === '60666c42cc7b410027a1a9b1');
  const bunBottom = data.find(item => item._id === '60666c42cc7b410027a1a9b1');

  return (

      <div className="Constructor-column">
          <div style={{ height: 100, width: 60 }}/>

          {(bunTop)?
              <ConstructorElement
                  key={bunTop._id}
                  type="top"
                  isLocked={true}
                  text={bunTop.name+" (верх)"}
                  price={bunTop.price}
                  thumbnail={bunTop.image}
              /> : null}

          <div className="Constructor-col-list Constructor-scroll">
              {data.map((item) => {
                  return (item.type === 'main' || item.type === 'sauce') ?
                      <ConstructorElement
                          key={item._id}
                          text={item.name}
                          price={item.price}
                          thumbnail={item.image}
                      /> : null}
                  )
              }
            </div>

          {(bunBottom)?
              <ConstructorElement
                  key={bunBottom._id}
                  type="bottom"
                  isLocked={true}
                  text={bunBottom.name+" (низ)"}
                  price={bunBottom.price}
                  thumbnail={bunBottom.image}
              /> : null}

          <div className="Constructor-total">
              <p className="text text_type_digits-medium">610</p>
              <CurrencyIcon type="primary"/>
              <Button htmlType="button" type="primary" size="medium">Оформить заказ</Button>
          </div>
      </div>

  );

}

export default BurgerConstructor;