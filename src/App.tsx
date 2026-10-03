import React from "react";
import Navbar from "./components/shared/Navbar";
import ProgressBar from "./components/shared/ProgressBar";
import LandingPage from "./pages/LandingPage";
import { SmoothScrollProvider } from "./lib/SmoothScroll";

const App: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <ProgressBar />
      <Navbar />
      <LandingPage />
    </SmoothScrollProvider>
  );
};

export default App;
