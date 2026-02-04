import axios from 'axios'
import { useState, useEffect } from 'react'


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
            <nav className="navbar navbar-dark bg-primary">
                <p>Questi sono i nostri prodotti</p>
            </nav >
            <h1>Hello Router</h1>
        </div >

    )
}

export default Products