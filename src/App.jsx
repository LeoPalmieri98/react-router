import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//function App() {
//const [leggo, setScrivo] = useState([]);
//function mounted() {
// const fakeStore = "https://fakestoreapi.com/products";

//axios.get(fakeStore).then((product) => {
// setScrivo(product.data);
//console.log(product.data);
//
//}).catch(error => {
// console.log("Ops,abbiamo un problema:", error.message);
//})
//}
//useEffect(mounted, []);


//return (
//<div>
//<nav className="navbar navbar-dark bg-primary">
// <p>ciao</p>
//</nav >
// <h1>Hello Router</h1>
//</div >

//)
//}
import HomePage from "./pages/HomePage"
import About from './pages/About';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={About} />
    </Routes>
  </BrowserRouter>;
}

export default App