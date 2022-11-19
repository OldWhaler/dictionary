import './Description.scss';
import { DescriptionProps } from 'types';

import uniqid from 'uniqid';

function Description({ wordInfo }: DescriptionProps): JSX.Element {
  return (
    <>
      {wordInfo.length > 0 && <div className='description'>
        <h2 className='description__headling'>Word: {wordInfo[0].word}</h2>
        <ol className='description__list'>

          {wordInfo[0].meanings.map(meaning => {
            return (
              <li className='description__item description-item' key={uniqid()}>

                <span className='description-item__speech'>Part of speech: {meaning.partOfSpeech}</span>

                <ul className='description-item__list'>
                  {meaning.definitions.map(elem => {
                    return (
                      <li className='description-item__list-elem' key={uniqid()}>
                        <span>Defenition:</span> {elem.definition}
                      </li>
                    )
                  })}
                </ul>

              </li>
            )
          })}

        </ol>
      </div>}
    </>);
}

export default Description