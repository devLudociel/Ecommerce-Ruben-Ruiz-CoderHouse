import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from "../CardWidget/CardWidget"
import Logo from "../../../src/assets/logo.png"
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className='navBar'>
            <div className='logoNav'>
                <Link to="/">
                <img src={Logo} alt="Logo" className='imgLogo'/>
                </Link>
            </div>

            <ul className='items'>
                <li className='pulsate-bck'>
                    <Link to="/category/Teclados">Teclados</Link>
                </li>
                <li className='pulsate-bck'>
                    <Link to="/category/Mouse">Mouse</Link>
                </li>
                <li className='pulsate-bck'>
                    <Link to="/category/Sillas">Sillas</Link>
                </li>
                <li className='pulsate-bck'>
                    <Link to="/category/Audifonos">Audifonos</Link>
                </li>
                <li className='cardWidget'>
                    <Link to="/cart"><CardWidget/></Link>
                </li>
            </ul>


        </nav>
    )
}

export default NavBar