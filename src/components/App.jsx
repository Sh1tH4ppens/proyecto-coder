import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import Carrousel from './Carrousel/Carrousel.jsx';
import ItemCount from './ItemCount/ItemCount.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <div className='container'>
          <Navbar />
          <Carrousel/>
          <ItemListContainer greeting={"Hola,buenas tardes"}/>
        </div>
      </header>
    </>
  );
}

export default App;
