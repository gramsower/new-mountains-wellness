import React, { useState } from "react";
import Header from "./Header";
import ViewControl from "./ViewControl";
import Footer from "./Footer";
import { ThemeProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <ViewControl />
        <Footer />
      </div>
    </ThemeProvider>
  );
}