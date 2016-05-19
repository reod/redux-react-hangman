import React from 'react';
import AppComponent from './AppComponent.jsx';

class CorrectLetter extends AppComponent {
  render() {
    const { letter, guessed } = this.props;
    let className = ['letter', 'correct'];
    
    if (guessed) {
      className.push('guessed');
    }

    /* 
      TODO: to much elements 
      maybe should use :before and :after instead
    */

    return (
      <li className={className.join(' ')}>
        <div className="card">
          <div className="front"></div>
          <div className="back">{letter}</div>
        </div>
      </li>
    );
  }
}

CorrectLetter.contextTypes = {
  store: React.PropTypes.object
};

export default CorrectLetter;