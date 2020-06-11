import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import ContactUs from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import PortfolioData from './PortfolioData/PortfolioData';

function App() {
  return (
    <div className="App">
        <Header portfolioData={PortfolioData} />
        <About portfolioData={PortfolioData}/>
        <Resume portfolioData={PortfolioData}/>
        <Portfolio portfolioData={PortfolioData}/>
        <ContactUs portfolioData={PortfolioData}/>
        <Footer portfolioData={PortfolioData}/>
    </div>
  );
}

export default App;
