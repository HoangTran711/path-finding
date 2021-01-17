import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import './home-page.css'

export const HomePage  = () => {
	return (
		<div className="home-page">
			<div className="frame-left">
				<h1 className="heading-primary">Find Shortest Path</h1>
				<div className="icon-container">
					<a href="https://www.facebook.com/kudokun0711/" target="_blank" className="icon">
						<div className="ico">
						<FontAwesomeIcon icon={faFacebook}/>
						</div>
					</a>
					<a href="https://www.instagram.com/gigoo___/?hl=vi" target="_blank" className="icon">
						<FontAwesomeIcon icon={faInstagram}/>
					</a>
					<a href="https://github.com/HoangTran711/path-finding?fbclid=IwAR0zCZRe6Y4-yJUG43w976BOm61ccg13rHG9-S9UZhloyNgVhlc_HgN6DUo" target="_blank" className="icon">
					<FontAwesomeIcon icon={faGithub}/>
					</a>						
				</div>
			</div>
			<div className="frame-right">
				<div className="txt-frame">
					<span>Dijkstra's Algorithm</span>
					<p>We'll introduce to you about Dijkstra's Algorithm</p>
				</div>
			</div>
		</div>
	)
}