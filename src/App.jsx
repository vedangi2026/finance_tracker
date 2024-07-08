
import './App.css'
import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import LoginHeader from './components/LoginHeader';
import Footer from './components/Footer';
import LoginBody from './components/LoginBody';


function App() {
  //const [count, setCount] = useState(0)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Ga Maamli :400;700', 'sans-serif']
      }
    });
  }, []);

  return (
    
    <>
    <div>
      <LoginHeader/>
      
    </div>
    <div>
      <LoginBody/>
    </div>
    <div>
      <Footer/>
    </div>
    
    </>
    
       
    
      
  );
}

export default App;
