import type { NextPage } from "next";

type NumberProps = {
  number: number;
};

export const getStaticProps = () => {
  return {
    revalidate: 10, //seconds
    props: {
      number: Math.random(),
    },
  };
};

const Home: NextPage<NumberProps> = (props) => {
  return <h1>{props.number}</h1>;
};

export default Home;
