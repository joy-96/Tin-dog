import React from 'react';
import './App.css';
import Banner from "./components/banner"
import Features from "./components/features"
import Testimonials from "./components/testimonials"
import Press from "./components/press"
import Action from "./components/action"
import Footer from './components/footer';
import Price from './components/price';
 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Banner />
      <Features />
      <Testimonials />
      <Press />
      <Price />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
