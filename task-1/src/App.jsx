import React from 'react';
import './App.css';
import data from "./data.json";
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Total Posts: {data.total}</h1>
      <PostList posts={data.posts} />
    </div>
  );
}

export default App;
