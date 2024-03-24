import React from 'react';
import data from '../../utils/data.json';
import './product-list.css';
import Product from "./product";

type listTypes = 'bun' | 'sauce' | 'main'

const typeNames = {

    'bun':'Булки',
    'sauce':'Соусы',
    'main':'Начинки'

};

interface ProductListProps {

    listType: listTypes;
    
}

export const ProductList: React.FC<ProductListProps> = ({ listType }) => {
    return (
       <>
           <p className="text text_type_main-medium">
               {typeNames[listType]}
           </p>
           <div className="Product-list">
               {data.map((item) => { return (item.type === listType) ? <Product key={item._id} image={item.image} name={item.name} price={item.price}/> : null })}
            </div>
       </>
    );
}

export default ProductList;