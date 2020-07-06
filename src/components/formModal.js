import React, { useState } from 'react'
import ModalWithTransitions from './Modal'

export default () => {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <h1>React Modal</h1>
      <h3>with useState</h3>

      <ModalWithTransitions
        activator={({ setShow }) => (
          <button type="button" onClick={() => setShow(true)}>
            Show Modal with Transitions
          </button>
        )}
      >
        Transitions, oh baby!
      </ModalWithTransitions>
    </div>
  )
}
