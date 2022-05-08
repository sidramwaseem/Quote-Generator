import React from "react";
import Header from "./components/Header.js";
import Quote from "./components/Quote.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Quote />
      <Footer />
    </div>
  );
}
