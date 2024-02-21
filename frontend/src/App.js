import './App.css';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
