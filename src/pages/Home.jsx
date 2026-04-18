import React from 'react';
import HeroSequence from '../components/HeroSequence';
import Pillars from '../components/Pillars';
import Manifesto from '../components/Manifesto';
import Apothecary from '../components/Apothecary';
import Journal from '../components/Journal';
import Consultation from '../components/Consultation';

const Home = () => {
  return (
    <>
      <HeroSequence />
      <Pillars />
      <Manifesto />
      <Apothecary />
      <Journal />
      <Consultation />
    </>
  );
};

export default Home;
