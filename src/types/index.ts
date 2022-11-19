interface Phonetic {
  "text"?: string,
  "audio"?: string
}

interface Definition {
  "definition": string,
  "example"?: string,
  "synonyms"?: string[],
  "antonyms"?: string[]
}

interface Meaning {
  "partOfSpeech": string,
  "definitions": Definition[]
}

interface WordInfo {
  "word": string,
  "phonetic"?: string,
  "phonetics"?: Phonetic[],
  "origin"?: string,
  "meanings": Meaning[]
}

interface ModalParams {
  visible: boolean
  text: string
}

interface ModalProps {
  modalParams: ModalParams
  setModalParams: React.Dispatch<React.SetStateAction<ModalParams>>
  inputRef: React.RefObject<HTMLInputElement>
}

interface DescriptionProps {
  wordInfo: WordInfo[]
}

interface SearchProps {
  inputRef: React.RefObject<HTMLInputElement>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  changeTextAreaValue: () => void
}

export type { WordInfo, ModalParams, SearchProps, DescriptionProps, ModalProps }