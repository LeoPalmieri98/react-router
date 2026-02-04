import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import NavBar from '../components/Navbar';


function Products() {
    const [leggo, setScrivo] = useState([]);
    function mounted() {
        const fakeStore = "https://fakestoreapi.com/products";

        axios.get(fakeStore).then((product) => {
            setScrivo(product.data);
            console.log(product.data);

        }).catch(error => {
            console.log("Ops,abbiamo un problema:", error.message);
        })
    }
    useEffect(mounted, []);


    return (
        <div>
            <NavBar />
            <h1>Prodotti</h1>
            <p>Questi sono i nostri prodotti</p>
        </div >

    )
}

export default Products