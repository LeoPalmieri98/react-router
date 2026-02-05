import { Link, NavLink } from "react-router-dom";
function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-secondary">
            <div className='container d-flex justify-content-between align-items-center'>
                <img id="logo-nav" src="/img/logo.png" alt="logoFakeStore" />
                <div className="d-flex gap-3">
                    <NavLink className="btn btn-dark" to="/products">Prodotti</NavLink>
                    <NavLink className="btn btn-dark" to="/">HomePage</NavLink>
                    <NavLink className="btn btn-dark" to="/about">About</NavLink>
                </div>
            </div>
        </nav >
    )
}

export default NavBar