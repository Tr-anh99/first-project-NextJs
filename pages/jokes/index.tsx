import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { getRandomJoke } from "@/lib/jokes";
import React from "react";

interface JokesProps {
  joke: {
    value:string
  }
}

const Jokes: React.FC<JokesProps> = ({joke}) => {
  return (
    <Layout>
      <Header/>
      <div className="mt-20">{joke.value}</div>
    </Layout>
  );
};

export default Jokes;

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  return {
    props: {
      joke
    },
  };
}