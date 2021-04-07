import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async (context) => {
  const res = await fetch("https://swapi.dev/api/people/");

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

const People = ({ data }) => {
  return (
    <div>
      <Head>
        <title>People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-center font-xl font-semibold my-6">People</h1>
        <div className="flex  flex-wrap justify-center">
          {data.results.map((people) => {
            const urlResults = people.url.split("/");
            const id = urlResults[urlResults.length - 2];

            return (
              <div
                className="
              mx-2
              mb-2 
              bg-gray-700
               px-4 
               py-2 
               rounded-md
                text-white"
                key={id}
              >
                <Link href={`/people/${id}`}>{people.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default People;
