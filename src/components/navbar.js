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
            <img src={Logo} className="logo-img" alt='logo' />
        </div>
        <div className="nav-bar-option">
            <ul>
                <li><Link to="/"> HOME </Link></li>
                <li><Link to="/theory"> THEORY </Link></li>
                <li><Link to="/algorithm-visualize"> VISUALIZE </Link></li>
                <li><a target="_blank"  rel="noopener noreferrer" href="https://github.com/HoangTran711/path-finding?fbclid=IwAR0zCZRe6Y4-yJUG43w976BOm61ccg13rHG9-S9UZhloyNgVhlc_HgN6DUo"><FontAwesomeIcon className="icon-github" icon={faGithub} /></a></li>
                <li><Link to="/about-us">ABOUT</Link></li>
            </ul>
        </div>   
    </div>
	)
}