import { GetInTouch, Footer, Header, Hero } from "@components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
