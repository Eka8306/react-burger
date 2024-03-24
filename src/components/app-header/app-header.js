import {Logo, BurgerIcon, ProfileIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import './app-header.css';
import React from 'react';


function Header() {
    const [current, setCurrent] = React.useState('Конструктор')
    return (
        <div className="App-header">
            <menu className="App-header-menu">

                <div className="App-header-row">
                    <BurgerIcon type="primary" />{/*<BurgerIcon type={current==="one" ? "primary" : "secondary"}  />*/}
                    <p className="text text_type_main-default">
						Конструктор
					</p>
                    <ListIcon type="primary" />
                    <p className="text text_type_main-default">
						Лента заказов
					</p>
				</div>

                <Logo />

                <div className="App-header-row">
                	<ProfileIcon type="primary" />
					<p className="text text_type_main-default">
              			Личный кабинет
	   				</p>
				</div>

            </menu>
        </div>
    );
}



{/*class Header extends React.Component {
  render() {
    return (
	<header className="App-header">
		<div class="app-header_element_1">
			<BurgerIcon />
			<p className="text text_type_main-default">
              Конструктор
	   		</p>
		</div>
		<div class="app-header_element_2">
			<ListIcon />
			<p className="text text_type_main-default">
              Лента заказов
	   		</p>
		</div>
		<div class="app-header_element_3">
			<Logo />
		</div>		   
	    <div class="app-header_element_4">
			<ProfileIcon />
	   		<p className="text text_type_main-default">
              Личный кабинет
	   		</p>
		</div> 
	</header>
    );
  }
}*/}

export default Header; 