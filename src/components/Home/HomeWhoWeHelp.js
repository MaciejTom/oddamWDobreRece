import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function HomeWhoWeHelp() {
  const [info, setInfo] = useState([]);
  const [current, setCurrent] = useState("Fundacjom");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    fetch("http://localhost:3000/Fundations")
      .then(res => res.json())
      .then(items => setInfo(items));
  }, []);



  const getFundations = () => {
    return info?.find(fun => (fun.name === current));

  };

  const handleChangeFundation = e => {
    setCurrent(e.target.id);
    setCurrentPage(1)
  };

  //GET CURRENT
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getFundations()?.items.slice(indexOfFirstPost, indexOfLastPost)

  //PAGINATION
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(getFundations()?.items.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  //CHANGE PAGINATE
  const paginate = (pageNumber) =>  {

    setCurrentPage(pageNumber); }




  return (
    <>
      <section className="WhoWeHelp" name="HomeWhoWeHelp">
        <span className="WhoWeHelp__who">Komu pomagamy?</span>
        <img src={require("./../../assets/Decoration.svg")} />
        <div className="WhoWeHelp_btns">
        <button className="btn" id="Fundacjom" onClick={handleChangeFundation}>
          Fundacjom
        </button>
        <button className="btn" id="Organizacjom pozarządowym" onClick={handleChangeFundation}>
          Organizajom pozarządowym
        </button>
        <button className="btn" id="Lokalnym zbiórkom" onClick={handleChangeFundation}>
          Lokalnym zbiórkom
        </button>
      </div>
        <p className="WhoWeHelp__describe">{getFundations()?.desc}</p>
        <ul>
          {currentPosts?.map(el => <li>{el.header}<br/>{el.subheader}</li>)}
        </ul>
        <ul>
          {pageNumbers.map(number => (<li onClick={() => paginate(number)}>{number}</li>))}
        </ul>


      </section>
    </>
  );
}

export default HomeWhoWeHelp;
