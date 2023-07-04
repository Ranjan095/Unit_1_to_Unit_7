import logo from './logo.svg';
import './App.css';
import RoutesProvider from './pages/Routes/Routes';
import NavBar from './NavBar/NavBar';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <RoutesProvider/>
    </div>
  );
}

export default App;
