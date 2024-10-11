import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Coach from './Components/Coach/Coach';
import Image from './Components/Image/Image';
import Passes from './Components/Passes/Passes';
import Reviews from './Components/Reviews/Reviews';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import Practice from './Components/Practice/Practice';

function App() {
  return (
    <>
      <Navbar/>
      <Services/>
      <About/>
      <Coach/>
      <Image/>
      <Passes/>
      <Reviews/>
      <Blog/>
      <Contact/>
      <Footer/>
      {/* <Practice/> */}
      
      
    </>
  );
}

export default App;
