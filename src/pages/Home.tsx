// src/pages/Home.jsx
import Hero from '../components/MyTrackrSections/Hero'
// import LogoCloud from '../components/MyTrackrSections/BusinessLogos'
import FeatureHighlights from '../components/MyTrackrSections/FeatureHighlights'
import HowItWorks from '../components/MyTrackrSections/HowItWorks'
import DetailedFeatures from '../components/MyTrackrSections/DetailedFeatures'
import Pricing from '../components/MyTrackrSections/Pricing'
import FAQ from '../components/MyTrackrSections/FAQ'
// import FinalCTA from '../components/MyTrackrSections/FinalCTA'

const Home = () => {
  return (
    <main>
      <Hero />   
      {/* <LogoCloud />    */}
      <FeatureHighlights />
      <HowItWorks />
      <DetailedFeatures />
      <Pricing />
      <FAQ />
      {/* <FinalCTA /> */}
    </main>
  )
}

export default Home