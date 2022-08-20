

import { Link } from 'react-router-dom';
function Navbar() {


    return (

        <div>


            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Booksy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{ justifyContent: 'space-evenly' }} id="navbarSupportedContent">

                        <form className="d-flex w-75" role="search">
                            <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />


                        </form>

                        <div className="row">
                            <span className="col-4"><i className="fa-regular fa-heart"></i></span>
                            <span id="cartall" className="col-4 cartPrent"><span id="cart">0</span></span>
                            <span className="col-4">EN</span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <ul className="d-flex">
                    <li><Link to="home" >Home</Link></li>
                    <li><Link to="/BestSale" >bestseller</Link></li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Bookshelves
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/classics">Harvard Classics</Link></li>
                            <li><Link className="dropdown-item" to="/philosophy">Philosophy</Link></li>
                            <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/allbooks">Find a store</Link></li>
                    <li><Link to="/populer">Populer</Link></li>
                </ul>
            </div>


        </div>
    )

}
export default Navbar;