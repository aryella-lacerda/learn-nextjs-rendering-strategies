import type { GetStaticPropsContext, NextPage } from "next";

type Props = {
  users: Array<{
    id: number;
    name: string;
    email: string;
  }>;
};

export const getStaticPaths = () => {
  return {
    fallback: true,
    paths: [
      { params: { id: "100" } },
      { params: { id: "200" } },
      { params: { id: "300" } },
    ],
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log("\n[Server] Generating static props...");
  const data = await fetch(
    `http://localhost:3000/api/users/${context.params?.id}`
  );
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
};

const Home: NextPage<Props> = (props) => {
  console.log("\n[Client] Rendering SSG products...");
  return (
    <>
      <h1>Users</h1>
      <ul>
        {props.users?.map((user) => (
          <li key={user.id}>{`${user.id} - ${user.name} - ${user.email}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
