import './App.css';
import Header from './components/Header/Header';
import FavouriteProducts from './screens/FavouriteProducts/FavouriteProducts';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './screens/ProductsPage/ProductsPage';
import AddNewProduct from './screens/AddNewProduct/AddNewProduct';
import EditProduct from './screens/EditProduct/EditProduct';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/favourite" element={<FavouriteProducts />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/new-product" element={<AddNewProduct />} />
          <Route path="/t/:id" element={<EditProduct />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
