import { useState, useRef } from 'react';

import Search from 'components/Search/Search';
import Description from 'components/Description/Description';
import Modal from 'components/Modal/Modal';

import { WordInfo, ModalParams } from 'types';
import './App.scss';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [wordInfo, setWordInfo] = useState<WordInfo[]>([])
  const [modalParams, setModalParams] = useState<ModalParams>({
    visible: false,
    text: ''
  })

  const inputRef = useRef<HTMLInputElement>(null);

  function changeTextAreaValue() {
    const word = inputRef.current?.value.trim() as string;
    setInputValue('')
    if (word.length === 0) {
      inputRef.current?.focus()
      return
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`${response.status}`)
        }
      })

      .then(
        (data: WordInfo[]) => {
          const { word, meanings } = data[0]
          setWordInfo([{ word, meanings }])
        })

      .catch(e => {
        const statusCode = +e.message;
        if (statusCode === 404) {
          setModalParams({
            visible: true,
            text: 'Word not found'
          })
        } else if (statusCode >= 500) {
          setModalParams({
            visible: true,
            text: 'Server error, please try again later'
          })
        }
      })
  }

  return (
    <div className="app">
      {modalParams.visible && <Modal
        setModalParams={setModalParams}
        modalParams={modalParams}
        inputRef={inputRef} />}
      <Search
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeTextAreaValue={changeTextAreaValue}
      />
      <Description wordInfo={wordInfo} />
    </div>
  );
}

export default App;





