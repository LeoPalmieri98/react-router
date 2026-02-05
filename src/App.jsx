import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import About from './pages/About';
import Products from './pages/Products';
import DefaultLayout from './layouts/DefaultLayout';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="" Component={HomePage} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App