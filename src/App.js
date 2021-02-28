import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom';

import {Switch,Route,Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>   
    <div className="App">
      <Home />
      <div style={{marginTop: 20, backgroundColor: 'black', textAlign: 'center', color: 'white'}}>
        <div>Always open to face Challenges and solve business problems</div>
        <div>Linkedin: www.linkedin.com/in/rajapandian-mech</div>
        <div>Email ID: rajanata98@gmail.com</div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
