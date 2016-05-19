const reducers = {
  config: (state, action) => {
    return {
      MAX_HANGMAN: 11,
      MAX_WORD_LENGTH: 11
    };
  },

  gameState: (state  = { win: false, over: false }, action) => {
    switch (action.type) {
      case 'USER_WIN':
        return {...state, win: true};
      case 'GAME_OVER':
        return {...state, over: true};
      default:
        return state;
    }
  },

  hangman: (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT_HANGMAN':
        return state + 1;
      default:
        return state;
    }
  },

  word: (state = { word: '', fetching: false, error: null }, action) => {
    switch (action.type) {
      case 'FETCH_WORD':
        return {
          word: '',
          fetching: true,
          error: null
        };
      case 'SET_WORD':
        return {
          word: action.word,
          fetching: false, 
          error: null
        };
      case 'SET_FETCH_WORD_ERROR':
        return {
          word: '',
          fetching: false,
          error: action.error
        };
      default:
        return state;
    }
  },

  currentLetter: (state = null, action) => {
    switch (action.type) {
      case 'NEW_LETTER':
        return action.letter;
      default:
        return state;
    }
  },

  correctLetters: (state = [], action) => {
    switch (action.type) {
      case 'INSERT_CORRECT_LETTER':
        return [...state, action.letter];
      default:
        return state;
    }
  },

  incorrectLetters: (state = [], action) => {
    switch (action.type) {
      case 'INSERT_INCORRECT_LETTER':
        return [...state, action.letter];
      default:
        return state;
    }
  }
};

export default reducers;