import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'
import './styles/transitions.css'

const Modal = ({ children, activator }) => {
  const [show, setShow] = useState(false)

  const content = (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )

  return (
    <>
      {activator({ setShow })}
      {ReactDOM.createPortal(
        <CSSTransition
          in={show}
          timeout={120}
          classNames="modal-transition"
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  )
}

export default Modal
