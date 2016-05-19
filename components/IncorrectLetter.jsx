import React from 'react';
import AppComponent from './AppComponent.jsx';

class IncorrectLetter extends AppComponent {
  render() {
    return (
      <li className="letter incorrect">{this.props.letter}</li>
    );
  }
}

export default IncorrectLetter;