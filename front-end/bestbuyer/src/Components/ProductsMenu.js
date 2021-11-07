import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import DropDown from './DropDown';
import '../Styles/DropDownProduct.css';

function ProductMenu() {
    const { dropDownProduct, setDropDownProduct, mercadoLivre } = useContext(appContext)

  return (
    <div>
      <DropDown
       value={dropDownProduct}
       change={setDropDownProduct}
       state={mercadoLivre.map(item => item.name)}
       selectClass='drop-down-product'
       selectedClass='drop-down-product-option'
      /> 
    </div>
  );
}

export default ProductMenu;
