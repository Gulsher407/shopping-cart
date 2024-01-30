import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Page from './components/Page';
import Footer from './components/Footer'

import Contactus from './components/Contactus';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Page />} />
          <Route path="/contact" element={<Contactus />} />

        </Routes>
           <Footer/>     
      </div>
    </BrowserRouter>
  );
}

export default App;
