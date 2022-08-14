import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ForContact from './Components/ForContact';
import Home from './Components/Home';
import Info from './Components/Info';
import Infobody from './Components/Infobody';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Works from './Components/Works';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Infobody/>} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/works' element={<Works />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<ForContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
