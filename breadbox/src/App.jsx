import './App.css'
import Header from '../components/Header';
import ContentSpace from '../components/ContentSpace';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Article from '../components/Article';

function App() {

  return (
    <>
      <Header />
      <ContentSpace>
      </ContentSpace>
    </>
  )
}

export default App;
