import React from "react";
import Header from "./Components/Header/Header.jsx";
import Banner from "./Components/Banner/Banner";
import WorkJourney from "./Components/Workjourney/Workjourney";
import ToolsTechnology from "./Components/Technology/TechnologyTools";
import ProjectsScrollSlider from "./Components/Projects/Projects";
import ContactSection from "./Components/Contact/Contact";










function App() {
  return (
    <>
      <Header /> 
      <Banner />  
      <WorkJourney />
      <ToolsTechnology/>
      <ProjectsScrollSlider />
      <ContactSection />
     
      
    </>

  );
}

export default App;
