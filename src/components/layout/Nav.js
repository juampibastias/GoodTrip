import React from 'react';
import { NavLink } from 'react-router-dom';



import '../../styles/layout/Nav.css';
const Nav = (props) => {
    return (
    <nav>
        <div className="holder">
            <ul>
                <li><NavLink activeClassName="activo" exact to="/" id="boton">Home</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/nosotros" id="boton">Nosotros</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/novedades" id="boton">Novedades</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/contacto" id="boton">Contacto</NavLink></li>
            </ul>
        </div>
    </nav>
    );
}

export default Nav;