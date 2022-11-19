import './Modal.scss';

import { ModalProps } from 'types';

function Modal({
  setModalParams,
  modalParams,
  inputRef }: ModalProps): JSX.Element {
  inputRef.current?.blur()

  function fieldClickHandler(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (!target.classList.contains('modal__content')) {
      closeModal()
      inputRef.current?.focus()
    }
  }

  function closeModal() {
    setModalParams({
      visible: false,
      text: ''
    })
  }

  return (
    <div
      className='modal'
      onClick={e => fieldClickHandler(e)}
    >
      <p className="modal__content">
        {modalParams.text} &#128532;
        <button className='modal__close-button' />
      </p>
    </div>
  )
}

export default Modal