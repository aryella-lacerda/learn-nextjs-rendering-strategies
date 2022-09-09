import type { NextPage } from "next";

type Props = {
  number: number;
};

export const getServerSideProps = () => {
  return {
    props: {
      number: Math.random(),
    },
  };
};

const Home: NextPage<Props> = (props) => {
  return <h1>{props.number}</h1>;
};

export default Home;
