import React, { useState } from "react";


function ItemForm({onItemFormSubmit, onItemFormChange, onItemFormCat}) {
 



  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onItemFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemFormCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
