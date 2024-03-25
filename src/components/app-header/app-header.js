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

					<a href="#" className="App-header-icon">
						<BurgerIcon type="primary" />{/*<BurgerIcon type={current==="one" ? "primary" : "secondary"}  />*/}
						<p className="text text_type_main-default">
							Конструктор
						</p>
					</a>
                    
					<a href="#" className="App-header-icon">
						<ListIcon type="primary" />
						<p className="text text_type_main-default">
							Лента заказов
						</p>
					</a>	
                    
				</div>

                
				<a href="#" className="App-header-icon">
					<Logo />
				</a>

                <div className="App-header-row">

					<a href="#" className="App-header-icon">
						<ProfileIcon type="primary" />
						<p className="text text_type_main-default">
							Личный кабинет
						</p>
					</a>

				</div>

            </menu>
        </div>
    );
}



export default Header; 