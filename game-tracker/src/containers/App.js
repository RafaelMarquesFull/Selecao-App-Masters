import React from 'react';
import './App.css';
import Header from '../components/header'
import Section from '../components/sections'
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className='container_main'>
        <div className='layout_main'>
          <Section/>
        </div>
      </main>
      <footer className='App-footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
