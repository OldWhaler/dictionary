import { useState, useRef } from 'react';
import WordInfo from 'types/DataInterface';
import './App.scss';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [wordInfo, setWordInfo] = useState<WordInfo[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  function changeTextAreaValue() {
    const word = inputRef.current?.value as string;
    setInputValue('')

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then((data: WordInfo[]) => {
        const { word, meanings } = data[0]
        setWordInfo([{ word, meanings }])
      })
  }

  return (
    <div className="app">

      <div className="app__row">
        <h2 className='app__headling'>Dictionary</h2>

        <input
          className='app__input'
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? changeTextAreaValue() : null}
        />

        <button className='app__button'
          onClick={changeTextAreaValue}>
          <img src={`${__dirname}loupe.svg`} alt="" />
        </button>
      </div>

      <div className="app__row">
        {wordInfo.length > 0 && <>
          <h2 className='app__headling'>{wordInfo[0].word}</h2>
          <ul>
            {wordInfo[0].meanings.map(meaning => {
              return <>
                <li>{meaning.partOfSpeech}</li>
                <ul>
                  {meaning.definitions.map(elem => {
                    return <li>{elem.definition}</li>
                  })}
                </ul>
              </>
            })}
          </ul>
        </>}

      </div>

    </div>
  );
}

export default App;





