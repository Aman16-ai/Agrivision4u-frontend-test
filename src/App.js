import logo from './logo.svg';
import './App.css';
import Section from './pages/section/Section.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Questions from './pages/questions/Questions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section/>} />
          <Route path='/questions' element={<Questions/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
