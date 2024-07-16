import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Service from './components/service/Service'
import ContactUs from './components/contact us/ContactUs'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='root'>
     <Navbar/>
     <Intro/>
     <Service/>
     <ContactUs/>
     <Footer/>
    </div>
  )
}

export default App
