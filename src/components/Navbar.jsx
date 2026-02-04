import { Link, NavLink } from "react-router-dom";
function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-secondary">
            <div className='container'>
                <img id="logo-nav" src="/img/logo.png" alt="logoFakeStore" />
                <NavLink className="btn btn-dark" to="/products">Prodotti</NavLink>
                <NavLink className="btn btn-dark" to="/">HomePage</NavLink>
                <NavLink className="btn btn-dark" to="/about">About</NavLink>
            </div>
        </nav >
    )
}

export default NavBar