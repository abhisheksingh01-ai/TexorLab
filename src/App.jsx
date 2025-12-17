import Navbar from './components/navbar/Navbar';
import HeroSection from './components/heroSection/HeroSection';
import KeyServices from './components/KeyServices/KeyServices';
import ResultsDriven from './components/ResultsDriven/ResultsDriven';
import Testimonials from './components/Testimonials/Testimonials';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';
import ReadyToGrow from './components/ReadyToGrow/ReadyToGrow';
import Footer from './components/Footer/Footer';
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <KeyServices/>
      <ResultsDriven/>
      <Testimonials/>
      <TrustedCompanies/>
      <ReadyToGrow/>
      <Footer/>
    </>
  )
}
