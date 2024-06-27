
import './App.css';

import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Experience from './Experience';
import Contact from './Contact';
import user from './component/images-folder/pro.png';

// import routing components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='container pt-4 mt-4'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='border p-4 rounded border-dark'>
                <div className='mb-4'>
                  <img src={user} className='rounded-circle img-fluid mb-4' style={{ width: '200px' , height:'200px', display:'block', margin:'auto' }} alt="imgg" />
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      <Link to={'/about'} className='nav-link'>About Us</Link>
                    </li>

                    <li className='list-group-item'>
                      <Link to={'/skills'} className='nav-link'>Skills</Link>
                    </li>

                    <li className='list-group-item'>
                      <Link to={'/qualification'} className='nav-link'>Qualification</Link>
                    </li>

                    <li className='list-group-item'>
                      <Link to={'/experience'} className='nav-link'>Experience</Link>
                    </li>

                    <li className='list-group-item'>
                      <Link to={'/contact'} className='nav-link'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-9'>
              <div className='border border-dark p-4 rounded'>
                {/* { all the components will be rendere here} */}

                <Routes>
                  <Route path='/about' element={<About/>} />
                  <Route path='/skills' element={<Skills/>} />
                  <Route path='/qualification' element={<Qualification/>} />
                  <Route path='/experience' element={<Experience/>} />
                  <Route path='/contact' element={<Contact/>} />
                </Routes>



              </div>

            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// additional: routing: react-router-dom, npm install react-router-dom