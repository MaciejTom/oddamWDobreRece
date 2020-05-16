import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


function HomeWhoWeHelp() {

  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/db")
      .then(res => res.json())
      .then(items => setInfo(items))
  },[])


  return (
    <>
    <h1>Komu pomagamy?</h1>
    <button>Fundacjom</button>
    <button>Organizajom pozarządowym</button>
    <button>Lokalnym zbiórkom</button>
    







    </>
  );
}

export default HomeWhoWeHelp;
