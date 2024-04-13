// import React, { useEffect, useState } from "react";
import React from 'react';
import GameCard from './GameCard';

const Home = ({ games }) => {
  console.log(games);
  //   const [games, setGames] = useState([]);
  //   const [sortedGames, setSortedGames] = useState([...games]);

  //   useEffect(() => {
  //     fetch("/games_list.json")
  //       .then((res) => res.json())
  //       .then((data) => setGames(data));
  //   }, []);

  return (
    <>
      {/* <!-- Start: Games Container --> */}
      <div className="row">
        {games.map((item, index) => (
          <GameCard key={index} item={item} index={index}></GameCard>
        ))}
      </div>
      {/* <!-- End: Games Container --> */}
    </>
  );
};

export default Home;
