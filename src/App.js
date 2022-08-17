import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ForContact from './Components/ForContact';
import Home from './Components/Home';
import Infobody from './Components/Infobody';
import LoadPage from './Components/LoadPage';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
      {
        loading ? <LoadPage /> :
          <BrowserRouter>
            <Routes >
              <Route path='/' element={<Home />} >
                <Route path='/' element={<Infobody />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/works' element={<Works />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<ForContact />} />
              </Route>
            </Routes>
          </BrowserRouter>
      }
    </>

  );
}

export default App;
