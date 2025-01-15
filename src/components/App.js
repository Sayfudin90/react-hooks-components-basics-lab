import React from 'react';
import Navbar from './Navbar'; 
import Home from './Home';
import About from './About';

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}


{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
