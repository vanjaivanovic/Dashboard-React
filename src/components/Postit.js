import React, { Component } from 'react';
import TextArea from './textArea.js';

class Postit extends Component {
  state = {
    postIt: localStorage.getItem('savedText')
  }

  postItValue = () => {
    let postItText = document.getElementById('input').value;
    this.setState({postIt: postItText});
    localStorage.setItem('savedText', postItText);
  }

  render(){
    return(
      <div>
        <TextArea textAreaClass="stickyNote" formId="form" textAreaId="input" placeholder={this.state.postIt} submitButton="submitButton" event={this.postItValue}/>
      </div>
      )

  }


}




  export default Postit;