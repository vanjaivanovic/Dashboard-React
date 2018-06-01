import React, { Component } from 'react';

const TextArea = (props) => {
	return(
	<div className="form">
		<form id={props.formId}> 
			<textarea className={props.textAreaClass} id={props.textAreaId} placeholder={props.placeholder}></textarea>
			<button id={props.submitButton} onClick={props.event}>Save</button>
		</form>
	</div>


	)
}


export default TextArea;