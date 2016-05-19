import React from 'react';
import AppComponent from './AppComponent.jsx';
import IncorrectLetter from './IncorrectLetter.jsx';

class IncorrectLetters extends AppComponent {
  render() {
    const { incorrectLetters } = this.context.store.getState();

    if (incorrectLetters.length === 0) {
      return <span />;
    }

    const letters = incorrectLetters.map((letter) => {
      return <IncorrectLetter key={letter} letter={letter} />
    });

    return (
      <div className="incorrect-area">
        <div className="result-label">you missed:</div>
        <ol className="letter-list incorrect-letters">
          {letters}
        </ol>
      </div>
    );
  }
}

IncorrectLetters.contextTypes = {
  store: React.PropTypes.object
};

module.exports = IncorrectLetters;