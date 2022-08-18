import logo from './logo.svg';
import './App.css';
import Section from './pages/section/Section.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section/>} />
          <Route path='/questions' element={<h1>Question section</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
