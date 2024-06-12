// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import StepsSection from "./components/StepsSection";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="px-4">
        <HomeSection />
        <AboutSection />
        <ServiceSection />
        <StepsSection/>
        <ContactSection/>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/" element={<HomeSection />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
}
export default App;
