import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import SectionCard from "../components/SectionCard";
import BackButton from "../components/BackButton";

const Drink = ({ bebidas }) => {
 

  console.log(bebidas.results);
  const data = bebidas.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/drink.png" alt="bebida" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de bebida
        </h1>
      </div>

      {data.map((bebida, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={bebida.data.titulo[0].text}
          productDescription={bebida.data.descripcion[0].text}
          productImgSrc={bebida.data.imagen.url}
          price={bebida.data.precio[0].text}
        />
      ))}

      <BackButton/>
    </div>
  );
};

export default Drink;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const bebidas = await Client().query(
    Prismic.Predicates.at("document.type", "bebidas")
  );

  return {
    props: {
      bebidas: bebidas,
    },
  };
}
