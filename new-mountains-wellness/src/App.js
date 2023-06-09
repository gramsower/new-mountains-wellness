import React from "react";
import NavBar from "./components/Navbar";
// import ViewControl from "./components/ViewControl";
import Footer from "./components/Footer";
import About from "./components/About";
import Announcements from "./components/Announcements";
import AreasOfFocus from "./components/AreasOfFocus";
import Calendar from "./components/Calendar";
import ContactMe from "./components/ContactMe";
import Map from "./components/Map";
import YogaTherapy from "./components/YogaTherapy";

export default function App() {
  return (
      <div className="App">
        <NavBar />
        <About />
        <Announcements/>
        <Calendar />
        <AreasOfFocus />
        <ContactMe />
        <Map />
        <Footer />
      </div>
  );
}