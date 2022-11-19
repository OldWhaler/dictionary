import { SearchProps } from 'types';

import './Search.scss';

function Search({
  inputRef,
  inputValue,
  setInputValue,
  changeTextAreaValue,
}: SearchProps): JSX.Element {
  return (
    <div className='search'>
      <h2 className='search__headling'>Dictionary</h2>

      <input
        className='search__input'
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? changeTextAreaValue() : null}
      />

      <button
        className='search__button'
        onClick={changeTextAreaValue}>
      </button>
    </div>
  )
}

export default Search