import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import './navbar.css'

export const Navbar = () => {
	return (
		<div className="nav-bar">
        <div className="logo-container">
            <Link to="/"><img src={Logo} className="logo-img" alt='logo' /></Link>
        </div>
        <div className="nav-bar-option">
            <ul>
                <Link to="/"><li> HOME </li></Link>
                <Link to="/theory" ><li>THEORY</li> </Link>
                <Link to="/algorithm-visualize" ><li>VISUALIZE</li> </Link>
                <a target="_blank"  rel="noopener noreferrer" href="https://github.com/HoangTran711/path-finding?fbclid=IwAR0zCZRe6Y4-yJUG43w976BOm61ccg13rHG9-S9UZhloyNgVhlc_HgN6DUo"><li><FontAwesomeIcon className="icon-github" icon={faGithub} /></li></a>
                <Link to="/about-us"><li>ABOUT</li></Link>
            </ul>
        </div>   
    </div>
	)
}