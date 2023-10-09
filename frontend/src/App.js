
import React  from 'react';
import './App.css';
import ProductPage from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
