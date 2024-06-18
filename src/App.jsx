
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
            <Route path='/home/contact' element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
