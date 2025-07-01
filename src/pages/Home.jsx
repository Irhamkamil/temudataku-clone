import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
