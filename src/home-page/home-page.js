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
					<div className="icon">
						<FontAwesomeIcon icon={faFacebook}/>
					</div>
					<div className="icon">
						<FontAwesomeIcon icon={faInstagram}/>
					</div>
					<div className="icon">
						<FontAwesomeIcon icon={faGithub}/>
					</div>
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