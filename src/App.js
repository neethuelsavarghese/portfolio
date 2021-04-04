import logo from './logo.svg';
import './App.css';

import Aboutme from './Components/About/Aboutme';
import Home from './Components/Home/Home';
import Particles from './Components/Particles/Particles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Particles/>
      </header>
    </div>
  );
}

export default App;
