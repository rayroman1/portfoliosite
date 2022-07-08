import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home.js';
import Welcome from './components/Welcome';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import  'C:/React/portfoliosite/src/styles/header.css';
function App() {
 

  return (

    <div className="App">

<div className="Headdiv">
    <Header/>



    </div>

          
      <header className="App-header">
     
     
        <p>
           <code>Today is 6/30/2022</code> 
        </p>
        
        <Router>
          <Routes>
          <Route path="/homepage"  element={<Home/>}/>

          </Routes>
          </Router>
          
      </header>
  

          <div>

<Home/>

          </div>
          <div>
            <Welcome/>
          </div>

        <div> <Footer/> </div>
    </div>
  );
}

export default App;
