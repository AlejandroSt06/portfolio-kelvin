import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'


import Header from './components/Header';
import HeroSection from './components/Home';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/Services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<HeroSection></HeroSection>
<AboutSection/>

<ServicesSection />
    </>
  )
}

export default App
