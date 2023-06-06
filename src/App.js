import React,{useState} from 'react'
import Navbar from './components/Navbar';
import About from './components/About'; 
import LoadingBar from 'react-top-loading-bar'
import Dashboard from './components/Dashboard'; 
import Erore from './components/Erore';
import Home from './components/Home';
function App() {
   const [progress,setProgress]=useState(100);
  // eslint-disable-next-line 
  return ( 
    <>
      
        <Navbar />
        <LoadingBar color='white' height={5} progress={progress} />   
        
          
            <Home      />
            
         
           
            <About   />
          
          
            <Dashboard />
          
          
            <Erore />
        
    </>
  )
}

export default App