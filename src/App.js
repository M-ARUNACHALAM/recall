import React  from 'react';
import Registerpage from './Pages/Registerpage'
// import H from './hell0'
// import Home from './home';
// import About from './About';
import { Routes,Route } from 'react-router-dom';
import { Loginpage } from './Pages/Loginpage';
import { DashBoardPage } from './Pages/Dashboard';
// import { Navbar } from './Navbar';


// import { Route } from 'react-router-dom';

 function App(){
  return (
    <div className="App">
    {/* //    <h1>welcome to the Router world</h1>
    //    <Navbar/>
    //  <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path="about" element={<About/>}/>
    //  </Routes> */}
    
    <Routes>
      <Route path="/register" element={<Registerpage/>}/>
      <Route path = "/" element={<h1>Home</h1>}/>
      <Route path='/dashboard' element={<DashBoardPage/>}/>
      <Route path='login' element={<Loginpage/>}/>
    </Routes>
    
      
    </div>
  );
}
export default App;
