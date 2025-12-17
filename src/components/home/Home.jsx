import HeroSection from "../heroSection/HeroSection";
import KeyServices from "../KeyServices/KeyServices";
import ResultsDriven from "../ResultsDriven/ResultsDriven";
import Testimonials from "../Testimonials/Testimonials";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";
import ReadyToGrow from "../ReadyToGrow/ReadyToGrow";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyServices limit={4} />
      <ResultsDriven />
      <Testimonials />
      <TrustedCompanies />
      <ReadyToGrow />
    </>
  );
}
