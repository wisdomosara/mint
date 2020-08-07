import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Body from './components/Body'

function App() {
  return (
    <div >
      <Header />
        <div className="d-flex">
          <Sidebar />
          <Body />
      </div>
    </div>
  );
}

export default App;
