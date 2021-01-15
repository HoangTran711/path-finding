import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import './message.css'

export const Message = ({errorMessage, successMessage}) => {
	return (
		<div className={`message ${successMessage !== '' ? 'successMessage' : 'errorMessage'}`}>
			<FontAwesomeIcon icon={successMessage !== '' ? faCheck : faTimes} />
			<div className="txt-frame">
				<p>{successMessage!=='' ? successMessage : errorMessage}</p>
			</div>
		</div>
	)
}