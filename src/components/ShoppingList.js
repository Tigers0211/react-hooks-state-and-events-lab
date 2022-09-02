import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [itemFilter, setFilter] = useState('All')

function handleFilterChange(event){
  setFilter(event.target.value);
}

const itemToDisplay = items.filter((item)=>{
  if (itemFilter === 'All'){
    return true;
  } 
    return item.category === itemFilter
  }
)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
