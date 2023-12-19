import './App.css';
import React, { useState } from 'react'
import SectionA from './SectionA';
import SectionB from './SectionB';
// import { Header,SectionA,SectionB,Team,Footer } from './Home';
import Team from './Team';
import Footer from './Footer';
import Header from './Header';
import { useSyncExternalStore } from 'react';
import Shope1 from './Shope1';
import Shope2 from './Shope2';
// import Product from './card';
function App() {
  const [mode, setMode] = useState({ backgroundColor: "white", color: "black" })
  const ToggleEvent = () => {
    if (mode.backgroundColor === '#0E0E10') {
      setMode({ backgroundColor: "white", color: "black" });
      document.body.style.backgroundColor = "white";
    }
    else {
      setMode({ backgroundColor: "#0E0E10", color: "white" });
      document.body.style.backgroundColor = "#0E0E10";
    }
  }

  const [Hide, setHide] = useState({ display: 'block', });
  const [Visible, setVisible] = useState({ display: 'none' });
  const [card, setcard] = useState({display: 'none'});
  const Shope = () => {
    setHide({display: "none",});
    setVisible({display: "block",});
  };
  const Home = () => {
    setHide({display: "block",});
    setVisible({display: "none",});
    setcard({display: "none",});
  };
  const Show = () => {
    setVisible({display: "none",});
    setcard({display: "block",});
  };
  const ArRow = () => {
    setVisible({display: "block",});
    setcard({display: "none",});
  };


  return (
    <div>
      <Header mode={mode} ToggleEvent={ToggleEvent} Home={Home} Shope={Shope} />
      {/* home */}
      <SectionA mode={mode} Hide={Hide} />
      <SectionB mode={mode} Hide={Hide} />
      <Team mode={mode} Hide={Hide} />
      {/* Shope */}
      <Shope1 mode={mode} Visible={Visible} Show={Show} />
      <Shope2 mode={mode} card={card} ArRow={ArRow} />
      {/* <Product/> */}
      <Footer mode={mode} />

    </div>
  );
}

export default App;
