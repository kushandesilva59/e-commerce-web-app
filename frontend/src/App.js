import './App.css';
import Header from './components/Header/Header';
import FavouriteProducts from './screens/FavouriteProducts/FavouriteProducts';
import LandingPage from './screens/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/favourite" element={<FavouriteProducts />} />
        
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
