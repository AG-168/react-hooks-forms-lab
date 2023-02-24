import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterText, setFilterText] = useState("")
  const [newItemText, setNewItemText] = useState("")
  const [newItemCat, setNewItemCat] = useState("Produce")
  const [updateItems, setUpdateItems] = useState(items)


  function handleItemFormSubmit (event) {
    event.preventDefault()
    const newItem = {
      id:uuid(),
      name:newItemText,
      category:newItemCat
    }
    setUpdateItems([...updateItems, newItem])
  }

  function handleItemFormChange (event) {
    setNewItemText(event.target.value)
  }

  function handleItemFormCat (event) {
    setNewItemCat(event.target.value)
  }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange (event) {
    setFilterText(event.target.value)
  }

  const itemsToDisplay = updateItems.filter((item) => {
    if (selectedCategory === "All" && filterText === "") {
      return true
    }
    else if (filterText !== "") {
      return item.name === filterText
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} onItemFormChange={handleItemFormChange} onItemFormCat={handleItemFormCat}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
