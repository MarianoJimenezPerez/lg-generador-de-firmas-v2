import React from 'react'
import SignResult from '../SignResult/SignResult'

const SignContainer = () => {
  return (
    <div className='sign__container'>
      <div className='sign__container__header'>
        <span>Para:</span>
        <span>Motivo:</span>
      </div>
      <div className='sign__container__content'>
        <span className='gray__bar'></span>
        <span className='gray__bar'></span>
        <span className='gray__bar'></span>
        <span className='gray__bar'></span>
        <SignResult />
      </div>
    </div>
  )
}

export default SignContainer