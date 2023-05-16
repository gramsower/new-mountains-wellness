import React, { useState } from "react";
import NavBar from "./navbar/navbar";
import ViewControl from "./components/ViewControl";
import Footer from "./components/Footer";
import { ThemeProvider } from "@chakra-ui/react";


export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <ViewControl />
        <Footer />
      </div>
    </ThemeProvider>
  );
}