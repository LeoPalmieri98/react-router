import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";


function Products() {
    const [product, setProduct] = useState([]);
    function mounted() {
        const fakeStore = "https://fakestoreapi.com/products";

        axios.get(fakeStore).then((product) => {
            setProduct(product.data);
            console.log(product.data);

        }).catch(error => {
            console.log("Ops,abbiamo un problema:", error.message);
        })
    }
    useEffect(mounted, []);


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Products</h1>

            <div className="row g-4 justify-content-center">
                {product.map((e, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div className="card h-100 p-3 bg-light">
                            <div className="d-flex justify-content-center">
                                <img
                                    src={e.image}
                                    className="card-img-top custom-card-img"
                                    alt={e.title}
                                />
                            </div>
                            <div className="card-body px-0">
                                <h6 className="card-title text-center">{e.title}</h6>
                                <p className="text-center fw-bold bg-success ">€ {e.price}</p>
                                <button className="ms-2 btn btn-outline-danger mt-auto">Acquista</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products