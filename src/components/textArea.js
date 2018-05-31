import React, { Component } from 'react';

const TextArea = (props) => {
	return(
	<div className="form">
		<form id={props.formId}> 
			<textarea id={props.textAreaId}></textarea>
			<button id={props.submitButton} onClick={props.event}>Save</button>
		</form>
	</div>


	)
}


export default TextArea;