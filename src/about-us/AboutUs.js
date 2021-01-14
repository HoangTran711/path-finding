import React from 'react'
import classnames from 'classnames'
import Danh from '../assets/danh.png'
import Hanh from '../assets/hanh.png'
import Huy from '../assets/huy.png'
import Thao from '../assets/thao.png'
import Tran from '../assets/tran.png'
import './AboutUs.css'

export const AboutUs = () => {
	var slideIndex = 1;
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.querySelectorAll(".slideshow-container .mySlides");
		var dots = document.querySelectorAll(".dot");
		console.log(dots)
		if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
	}
	React.useEffect(() => {
		showSlides(slideIndex)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slideIndex])
	return (
		<div className="slide-container">
			<div className="our-team">
				<span>The Geniuses Behind Our Work</span>
				<h1>Our Team</h1>
			</div>
			<div className="slideshow-container">
				<div className={classnames("mySlides fade")}>
					<img src={Danh} style={{"width":"100%"}} alt="avt"/>
					<div className="text">Caption Text</div>
				</div>
				<div className={classnames("mySlides fade")}>
					<img src={Huy} style={{"width":"100%"}} alt="avt"/>
					<div className="text">Caption Two</div>
				</div>
				<div className={classnames("mySlides fade")}>
					<img src={Hanh} style={{"width":"100%"}} alt="avt"/>
					<div className="text">Caption Three</div>
				</div>
				<div className={classnames("mySlides fade")}>
					<img src={Thao} style={{"width":"100%"}} alt="avt"/>
					<div className="text">Caption Three</div>
				</div>
				<div className={classnames("mySlides fade")}>
					<img src={Tran} style={{"width":"100%"}} alt="avt"/>
					<div className="text">Caption Three</div>
				</div>

				<a href={() => false} className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
				<a href={() => false} className="next" onClick={() => plusSlides(1)}>&#10095;</a>

			</div>
			<br/>
			<div style={{'textAlign':'center'}}>
				<span className="dot" onClick={() => currentSlide(1)}></span> 
				<span className="dot" onClick={() => currentSlide(2)}></span> 
				<span className="dot" onClick={() => currentSlide(3)}></span>
				<span className="dot" onClick={() => currentSlide(4)}></span> 
				<span className="dot" onClick={() => currentSlide(5)}></span> 
			</div>
		</div>
	)
}