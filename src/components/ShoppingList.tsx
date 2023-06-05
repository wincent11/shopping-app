import React from "react";

export interface ShoppingItem{
  id: number,
  product: string,
  quantity: number
}

export interface ShoppingListProps{
  items:ShoppingItem[]
}

const ShoppingList = ({items}: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((it) => (
          <li key={it.id}>{it.product} - {it.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
