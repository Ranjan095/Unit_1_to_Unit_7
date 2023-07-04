import "./App.css";
import List from './components/MobileOS.jsx'

function App() {
  function Manufacturers_list(){
    return<>
    <h1>Mobile Manufacturers</h1>
<ul>
  manufacturers-list
    <li>- Samsung</li>
    <li> - HTC</li>
    <li>- Micromax</li>
    <li>- Apple</li>
</ul>
    </>
}
  
  return <div>
    <List/>
    <Manufacturers_list/>
  </div>;
}

export default App;
