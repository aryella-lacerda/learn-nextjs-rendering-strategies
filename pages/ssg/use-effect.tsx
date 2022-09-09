import type { NextPage } from "next";
import { useEffect, useState } from "react";

// Renders on the server
// Returns a new number every time the page loads

// Does NOT throw error in development env

const Home: NextPage = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(Math.random());
  }, []);

  return <h1>Static number: {number}</h1>;
};

export default Home;
