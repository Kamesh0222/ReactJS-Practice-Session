import React from 'react';
import { ItemProvider } from './ItemContext'; 
import ItemManager from './ItemManager';
import "./App.css"

const App = () => (
  <ItemProvider>
    <ItemManager />
  </ItemProvider>
);

export default App;
