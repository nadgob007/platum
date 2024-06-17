import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { About, Contacts, Home, ProductCatalog } from './pages';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/ProductCatalog' element={<ProductCatalog/>}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/about' element={<About />}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
