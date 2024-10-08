
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {Dashboard} from './pages/Dashboard';
import {Onboarding} from './pages/Onboarding';



const App=()=>{

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Onboarding" element={<Onboarding/>} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}



export default App;
