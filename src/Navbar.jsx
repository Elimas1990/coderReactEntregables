import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Search from "./Search";


const Navbar = (props) => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Hobby</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/tipo_producto/juego-de-cartas" className="nav-link">Juegos de cartas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tipo_producto/juego-de-mesa" className="nav-link">Juegos de mesa</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tipo_producto/juego-de-miniaturas" className="nav-link">Juego de miniaturas</Link>
                            </li>
                            <li className="nav-item">
                                <Search/>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;