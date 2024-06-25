import { useState } from 'react';
import { v4 as getId } from 'uuid';
import Item from './models/item';

import './App.css';
import ShoppingListForm from './components/ShoppingListForm';
import ShoppingList from './components/ShoppingList';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log('MADE TO THE APP COMPONENT!');
    setItems([...items, { id: getId(), product, quantity }]);
  };
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
