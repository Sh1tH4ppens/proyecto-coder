import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import Carrousel from './Carrousel/Carrousel.jsx';

function App() {
  return (
    <>
      <header>
        <div className='container'>
          <Navbar />
          <Carrousel/>
        </div>
      </header>
    </>
  );
}

export default App;
