import { Link, NavLink } from "react-router-dom";

function HomePage() {

    return (

        <div>
            <h1>HomePage</h1>
            <nav>
                <Link to="/">Home Page</Link>
                <NavLink className="btn btn-dark" to="/products">Prodotti</NavLink>
            </nav>
        </div>
    );
}

export default HomePage