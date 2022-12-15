import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx';
import Carrousel from './Carrousel/Carrousel.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

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
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/category/:category' element={<ItemListContainer />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
