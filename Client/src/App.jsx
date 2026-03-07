import React from 'react';
import Navbar from './Components/Navbar'; // adjust the path based on your folder structure
import './index.css'; // or './App.css' if that's where Tailwind is imported
import Head from './Components/Head';
import AboutUs from './Components/AboutUs';
import MissionVisionData from './Components/MissionVisionData';
import CountriesSection from './Components/CountriesSection';
import EnquiryForm from './Components/EnquiryForm';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      
      <Head/>
      <AboutUs/>
      <MissionVisionData/>
     <CountriesSection/>
     <EnquiryForm/>
     <Footer/>
    </div>
  );
}

export default App;
