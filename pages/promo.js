import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import SectionCard from "../components/SectionCard";
import BackButton from "../components/BackButton";

const Promo = ({ promos }) => {

  console.log(promos.results);
  const data = promos.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/promos.png" alt="promo" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de promo
        </h1>
      </div>

      {data.map((promo, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={promo.data.titulo[0].text}
          productDescription={promo.data.descripcion[0].text}
          productImgSrc={promo.data.imagen.url}
          price={promo.data.precio[0].text}
        />
      ))}

     <BackButton/>
    </div>
  );
};

export default Promo;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const promos = await Client().query(
    Prismic.Predicates.at("document.type", "promo")
  );

  return {
    props: {
      promos: promos,
    },
  };
}
