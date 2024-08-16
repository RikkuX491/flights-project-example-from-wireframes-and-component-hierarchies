import '../App.css';
import NavBar from "./NavBar";
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Header/>
        <Outlet/>
      </header>
    </div>
  );
}

export default App;
