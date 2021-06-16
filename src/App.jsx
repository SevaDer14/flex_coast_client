import React, { useEffect } from 'react'
import './styles/globals.css'
import LandingPage from './views/LandingPage'
import Footer from './components/Footer'
import ahoy from './modules/analytics'
import i18n from './i18n'

const App = () => {
  const setAppLanguage = () => {
    if (navigator.language.includes('sv')) {
      i18n.doLangSelect('Svenska')
    }
  }
  useEffect(() => {
    ahoy.trackView()
    setAppLanguage()
  }, [])

  return (
    <>
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
