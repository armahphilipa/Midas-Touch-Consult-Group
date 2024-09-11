import './index.css'
import { NavBar } from './components/NavBar';
import {Hero} from './components/Hero';
import {About} from './components/About';
import {Services} from './components/Services';
import {Contact} from './components/Contact';
import { Review } from './Review';
import { Base } from './Base';

function App() {

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Services />
    <Contact/>
    <Review/>
    <Base/>
    </>
  )
}

export default App
