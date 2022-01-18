import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import SectionCard from "../components/SectionCard";
import BackButton from "../components/BackButton";


const Cake = ({ bebidas }) => {
 
  console.log(bebidas.results);
  const data = bebidas.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/cake.png" alt="postre" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de postre
        </h1>
      </div>

      {data.map((postre, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={postre.data.titulo[0].text}
          productDescription={postre.data.descripcion[0].text}
          productImgSrc={postre.data.imagen.url}
          price={postre.data.precio[0].text}
        />
      ))}

      <BackButton/>
    </div>
  );
};

export default Cake;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const bebidas = await Client().query(
    Prismic.Predicates.at("document.type", "postres")
  );

  return {
    props: {
      bebidas: bebidas,
    },
  };
}
