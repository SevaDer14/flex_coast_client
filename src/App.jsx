import React from 'react'
import { useTranslation } from 'react-i18next'
import './styles/desktop.css'
import './styles/globals.css'

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1 className='title'>{t('getStarted')}</h1>
    </>
  )
}

export default App
