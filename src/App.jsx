import React from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('getStarted')}</h1>
    </>
  )
}

export default App
