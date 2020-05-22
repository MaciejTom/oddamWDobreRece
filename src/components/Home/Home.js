import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from './HomeAbout';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContactUs from './HomeContactUs';
import { Link as ScrollLink } from "react-scroll";

const Home = () => (
  <>

  <HomeHeader />
  <HomeThreeColumns/>
  <HomeSimpleSteps />
  <HomeAbout />
  <HomeWhoWeHelp />
  <HomeContactUs />
  </>
)

export default Home;
