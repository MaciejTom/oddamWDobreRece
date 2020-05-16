import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from './HomeAbout';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContactUs from './HomeContactUs';

const Home = () => (
  <>
  
  <HomeHeader name="HomeHeader"/>
  <HomeThreeColumns/>
  <HomeSimpleSteps name="HomeSimpleSteps"/>
  <HomeAbout name="HomeAbout"/>
  <HomeWhoWeHelp name="HomeWhoWeHelp"/>
  <HomeContactUs name="HomeContactUs"/>
  </>
)

export default Home;
