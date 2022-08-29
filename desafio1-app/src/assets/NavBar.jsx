import React from "react";


const NavBar = () => {
    return (
        <div className="container">
            <div className="row ">
                <ul className="nav d-flex justify-content-center ">
                    <li className="nav-item">
                        <a className="nav-link link_header text-dark" href="#">PERROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header text-dark" href="#">GATOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header text-dark" href="#">DONDE COMPRAR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link_header text-dark" href="#">CONTACTO</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;