import React from 'react';
import './App.css';
import Content from './components/Content'; // Import the Content component
import { Analytics } from '@vercel/analytics/react';
const App = () => {
  return (
    <div className="App">
      <Content  heading="Image Gallery"/>
      <Analytics />
    </div>
  );
};

export default App;
