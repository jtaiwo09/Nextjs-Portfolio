import Home from "@/components/home";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>JTK | Home</title>
        <meta
          name="description"
          content="A detailed porfolio page about Taiwo Joseph"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
