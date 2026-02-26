
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import BackgroundLines from './components/sections/BackgroundLines'
import LogoCloud from './components/sections/BusinessLogos'
import DetailedFeatures from './components/sections/DetailedFeatures'
import FAQ from './components/sections/FAQ'
import FeatureHighlights from './components/sections/FeatureHighlights'
import FinalCTA from './components/sections/FinalCTA'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'

function App() {

  return (
    <div className='relative min-h-screen'>
     {/* <BackgroundLines /> */}
     <Navbar />
     <Hero />   
     <LogoCloud />   
     <FeatureHighlights />
     <HowItWorks />
     <DetailedFeatures />
     <Pricing />
     <FAQ />
     <FinalCTA />
     <Footer />
    </div>
  )
}

export default App
