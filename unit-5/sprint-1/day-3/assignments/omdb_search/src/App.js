import logo from './logo.svg';
import './App.css';
import Dashbord from './Components/Dashbord';
import useDebounce from './Hooks/useDebounce';
import Todo from './Components/Todo';
function App() {
  
  return (
    <div className="App">
      <Dashbord/>
      <Todo/>
    </div>
  );
}

export default App;
