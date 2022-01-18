import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import SectionCard from "../components/SectionCard";
import BackButton from "../components/BackButton";

const Lunch = ({ almuerzos }) => {

  console.log(almuerzos.results);
  const data = almuerzos.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/lunch.png" alt="almuerzo" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de Almuerzo
        </h1>
      </div>

      {data.map((almuerzo, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={almuerzo.data.titulo[0].text}
          productDescription={almuerzo.data.descripcion[0].text}
          productImgSrc={almuerzo.data.imagen.url}
          price={almuerzo.data.precio[0].text}
        />
      ))}

      <BackButton/>
    </div>
  );
};

export default Lunch;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const almuerzos = await Client().query(
    Prismic.Predicates.at("document.type", "almuerzo")
  );

  return {
    props: {
      almuerzos: almuerzos,
    },
  };
}
