import store from './../stores/store';

/*
  I know, I should provide more resonable 
  mechanizm of dispatching actions for async flow, 
  but this is simple project for recruitment purposes,
  not complex enterprise app ;}
*/

const getRandomWord = () =>  {
  const request = new Promise((resolve, reject) => {
    const url = '//api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=2&maxLength=11&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    let req = new XMLHttpRequest();
    
    req.open('GET', url);

    req.onload = () => {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = () => {
      reject(Error('API error. Try again.'));
    };

    req.send();
  });

  store.dispatch({ type: 'FETCHING_WORD' });

  request.then((response) => {
    const [ { word } ] = response;
    store.dispatch({ type: 'RESET_GAME' });
    store.dispatch({ type: 'SET_WORD', word });
  }).catch((error) => {
    store.dispatch({ type: 'SET_FETCH_WORD_ERROR',  error: error.message });
  });
};

export default getRandomWord;