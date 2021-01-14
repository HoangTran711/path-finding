import React from 'react'
import './404.css'
export const ErrorPage = () => {
	const [numberFour, setNumberFour] = React.useState([])
	const [numberZero, setNumberZero] = React.useState([])
	React.useEffect(() => {
		const tempZero = []
		const tempFour = []
		for(let i = 0; i < 100; i++) {
			tempZero.push('0')
			tempFour.push('4')
		}
		setNumberFour(tempFour)
		setNumberZero(tempZero)
	},[])
	return (
		<div class='container'>
			{
				numberFour.map(number => <span className="particle">{number}</span>)
			}
			{
				numberZero.map(number => <span className="particle">{number}</span>)
			}
			<div class='content'>
				<p>Damnit stranger,</p>
				<p>You got lost in the <strong>404</strong> galaxy.</p>
				<p>
					<button>Go back to earth.</button>
				</p>
			</div>
		</div>
	)
} 