import type { NextPage } from "next";

// Throws warning in development env

const Home: NextPage = () => {
  return <h1>Static number: {Math.random()}</h1>;
};

export default Home;
