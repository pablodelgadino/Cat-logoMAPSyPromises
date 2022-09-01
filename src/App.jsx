import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <div className="App">
       <Navbar />
       <ItemListContainer texto='Tortas' />
    </div>
  )
}

export default App
