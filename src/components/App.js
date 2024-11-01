import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <NavBar />  {/* Add <NavBar /> as a child component */}
      <Home />     {/* Add <Home /> as a child component */}
      <About />    {/* Add <About /> as a child component */}
      
    </div>
  );
}

export default App;
