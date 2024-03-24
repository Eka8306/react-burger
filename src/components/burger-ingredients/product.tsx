import React from 'react';
import './product.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export interface ProductProps {

    name: string;
    price: number;
    image: string;

}

export const Product: React.FC<ProductProps> = ({ name, price, image }) => {
    return (

        <div className="Product">

            <img src={image} alt={name}/>
            <span style={{display: 'inline-flex'}}>
                <span style={{marginRight:'8px'}}>{price}</span> <CurrencyIcon type="primary"/>
           </span>
            <span>
               {name}
           </span>
           
        </div>
    );
}

export default Product;