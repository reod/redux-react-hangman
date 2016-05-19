import React from 'react';
import AppComponent from './AppComponent.jsx';
import CorrectLetter from './CorrectLetter.jsx';
import EmptyLetter from './EmptyLetter.jsx';

class CorrectLetters extends AppComponent {
  render() {
    const { config: { MAX_WORD_LENGTH }, word: { word }, correctLetters } = this.context.store.getState();
    let letterIndex = MAX_WORD_LENGTH; 
    let wordLength = word.length; 
    let wordReverseIndex = 1;
    let letters = [];

    for(; letterIndex > 0; letterIndex--, wordReverseIndex++) {
      let letter = word[wordLength - wordReverseIndex]; 
      let letterEl;

      if (letter) {
        letterEl = (
          <CorrectLetter key={letterIndex} letter={letter} guessed={correctLetters.includes(letter)} />
        );
      } else {
        letterEl = (<EmptyLetter key={letterIndex} />);
      }

      letters[letterIndex] = letterEl;
    }

    return (
      <div className="correct-area">
        <ol className="letter-list correct-letters">
          {letters}
        </ol>
      </div>
    );
  }
}

CorrectLetters.contextTypes = {
  store: React.PropTypes.object
};

export default CorrectLetters;