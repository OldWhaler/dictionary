import { useState, useRef } from 'react'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  function changeTextAreaValue() {
    const word = inputRef.current?.value as string;
    setInputValue('')

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then(
        data => setTextAreaValue(data[0].word),
        e => setTextAreaValue('Что-то пошло не так, попробуйте позже')
      )
  }


  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? changeTextAreaValue() : null}
      />
      <button
        onClick={changeTextAreaValue}
      >get description
      </button>
      <textarea
        defaultValue={textAreaValue}
      />
    </div>
  );
}

export default App;
