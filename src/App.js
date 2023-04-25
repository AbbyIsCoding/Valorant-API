import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Agents from './pages/Agents';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Agents' element={<Agents/>} />

    </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <Sentinels>  */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 
  );
}

export default App;
