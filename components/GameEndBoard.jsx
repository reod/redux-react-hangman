import React from 'react';
import AppComponent from './AppComponent.jsx';

class GameEndBoard extends AppComponent {
  
  constructor(props) {
    super(props);
    this._bind('_setNewWord');
  }

  _setNewWord() {
    getRandomWord();
  }

  render() {
    const { gameState: { win, over }, word: { word, error } } = this.context.store.getState();
    const label = win ? 'congratulations!' : 'game over';
    let className = ['overlay', 'game-end'];

    if(win || over) {
      className.push('visible');
    } else {
      className.push('hidden');
    }
    
    const answer = !over ? '' : (
      <div className="answer">
        BTW: {word}. 
      </div>
    );
    
    const errorMessage = !error ? '' : (
      <div className="error">
        {error}
      </div>
    );

    return(
      <div className={className.join(' ')}>
        <div className="content">
          <div className="result-label">{label}</div>
          <button className="oval-button" onClick={this._setNewWord}>new word</button>
          {answer}
          {errorMessage}
        </div>
      </div>
    );
  }
}

GameEndBoard.contextTypes = {
  store: React.PropTypes.object
};

export default GameEndBoard;