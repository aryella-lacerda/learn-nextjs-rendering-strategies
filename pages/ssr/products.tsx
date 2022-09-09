import type { NextPage } from "next";

type Props = {
  products: Array<{
    id: number;
    name: string;
    price: number;
  }>;
};

export const getServerSideProps = async () => {
  console.log("\n[Server] Generating server side props...");
  const data = await fetch("http://localhost:3000/api/products");
  const products = await data.json();

  return {
    props: {
      products,
    },
  };
};

const Home: NextPage<Props> = (props) => {
  console.log("\n[Client] Rendering SSR products...");

  return (
    <>
      <h1>Products</h1>
      <ul>
        {props.products.map((prod) => (
          <li
            key={prod.id}
          >{`${prod.id} - A(n) ${prod.name} costs US$ ${prod.price}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
