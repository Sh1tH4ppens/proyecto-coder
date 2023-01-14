import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx';
import Carrousel from './Carrousel/Carrousel.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <div className='container'>
            <Navbar />
            <Carrousel />
          </div>
        </header>
        <main>
          <div className='container'>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
