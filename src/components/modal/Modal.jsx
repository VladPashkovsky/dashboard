import React from 'react'
import classes from './modal.module.scss'

const Modal = ({ active, setActive, children }) => {

  const rootClass = [classes.modal]
  if (active) {
    rootClass.push(classes.active)
  }

  const rootClassContent = [classes.modal__content]
  if (active) {
    rootClassContent.push(classes.active)
  }

  return (
    <div className={rootClass.join(' ')} onClick={() => setActive(false)}>
      <div className={rootClassContent.join(' ')} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export {Modal}