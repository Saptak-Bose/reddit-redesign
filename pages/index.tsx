import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <Login />
      ) : (
        <div>
          <Head>
            <title>Reddit - Dive into anything</title>

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
          </Head>

          <Header />
        </div>
      )}
    </div>
  );
};

export default Home;
