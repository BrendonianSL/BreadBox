import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header';
import ContentSpace from '../components/ContentSpace';
import { useEffect } from 'react';
function App() {

  return (
    <>
      <Header />
      <ContentSpace />
    </>
  )
}

export default App
