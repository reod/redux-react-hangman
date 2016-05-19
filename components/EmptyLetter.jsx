import React from 'react';
import AppComponent from './AppComponent.jsx';

class EmptyLetter extends AppComponent {
  render() {
    return (
      <li className="letter empty"></li>
    );
  }
}

export default EmptyLetter;