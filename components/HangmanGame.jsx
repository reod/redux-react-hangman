import React from 'react';

import AppComponent from './AppComponent.jsx';
import Gallows from './Gallows.jsx';
import IncorrectLetters from './IncorrectLetters.jsx';
import CorrectLetters from './CorrectLetters.jsx';
import GameEndBoard from './GameEndBoard.jsx';
import getRandomWord from './../actions/async-actions';

class HangmanGame extends AppComponent {

  constructor(props) {
    super(props);
    this._bind('_handleUserInput');
  }

  componentDidMount() {
    document.addEventListener('keypress', this._handleUserInput);
    getRandomWord();
  }

  componentWillUmount() {
    document.removeEventListener('keypress', this._handleUserInput);
  }

  _handleUserInput(e) { 
    const letter = String.fromCharCode(e.which).toLowerCase();
    const { gameState: { win, over }, hangman, word: { word }, correctLetters, incorrectLetters } = this.context.store.getState();
    const enterPressed = e.keyCode === 13;

    if (win || over) {
      if (enterPressed) {
        getRandomWord();
      } else {
        console.warn('Reset game to continue.');
      }
      
      return;
    }

    this.context.store.dispatch({ type: 'NEW_LETTER', letter });

    const inWord = word.includes(letter);
    const inCorrect = correctLetters.includes(letter);
    const inIncorrect = incorrectLetters.includes(letter);

    if (inWord && !inCorrect) {
      this.context.store.dispatch({ type: 'INSERT_CORRECT_LETTER', letter });
    } else if (!inWord && !inIncorrect) {
      this.context.store.dispatch({ type: 'INSERT_INCORRECT_LETTER', letter });
      this.context.store.dispatch({ type: 'INCREMENT_HANGMAN' });
    }

    this._checkResult();
  }

  _checkResult() { 
    const { config: { MAX_HANGMAN }, hangman, word: { word }, correctLetters } = this.context.store.getState();

    if (hangman >= MAX_HANGMAN) {
      this.context.store.dispatch({ type: 'GAME_OVER' });
      return; 
    }

    const win = word.split('').every((letter) => { 
      return correctLetters.includes(letter);
    });

    if (win) {
      this.context.store.dispatch({ type: 'USER_WIN' });
    }
  }
  
  render() {
    return (
      <div className="hangman-game">
        <Gallows />
        <IncorrectLetters />
        <CorrectLetters />
        <GameEndBoard />
      </div>
    );
  }
}

HangmanGame.contextTypes = {
  store: React.PropTypes.object
};

export default HangmanGame;