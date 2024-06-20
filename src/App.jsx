// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Nav from "./components/Nav";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import StepsSection from "./components/StepsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="text-white">
      <Nav />
      <div className="px-4 md:px-18 pt-24 -z-10 relative" >
        <HomeSection />
        <AboutSection />

        <ServiceSection />

        <StepsSection />
        <ContactSection />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/" element={<HomeSection />} />
          </Routes>
        </BrowserRouter> */}
      </div>
      <FooterSection />
    </div>
  );
}
export default App;
