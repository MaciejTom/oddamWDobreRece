import React, { useState, useEffect } from "react";
import HomeContactUs from '../Home/HomeContactUs';
import GiveAwayHeader from './GiveAwayHeader';

function GiveAway() {
  return (
    <div className="GiveAway">
      <GiveAwayHeader/>
     <HomeContactUs/>
   </div>
  );
}

export default GiveAway;
