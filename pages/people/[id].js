export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://swapi.dev/api/people/${id}`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  const data = await res.json();

  const paths = data.results.map((people) => {
    const url = people.url.split("/");
    const id = url[url.length - 2];

    return {
      params: { id: id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const People = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold my-6">
        {`Person & ${data.name}`}
      </h1>
      <p>
        name:
        <span className="font-semibold">{data.name}</span>
      </p>
      <p>
        height:
        <span className="font-semibold">{data.height}</span>
      </p>
      <p>
        mass:
        <span className="font-semibold">{data.mass}</span>
      </p>
    </div>
  );
};

export default People;
