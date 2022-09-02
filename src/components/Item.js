import React, {useState}from "react";

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(false)
  const addCartToggle = addCart ? "in-cart" : ''

  function handleClick(){
    setAddCart((addCart) => !addCart)

  }
  return (
    <li className={addCartToggle}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addCart ? "Remove From Cart" : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
