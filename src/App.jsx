import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import About from './pages/About';
import Products from './pages/Products';
import NavBar from './components/Navbar';


function App() {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={About} />
      <Route path="/products" Component={Products} />
    </Routes>
  </BrowserRouter>;
}

export default App