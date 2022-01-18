import Head from "next/head";
import MainCard from "../components/MainCard";
import Link from "next/link";
import MainButton from "../components/MainButton";

export default function Home() {
  /*VIDEO INTRO
  
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const initFunction = () => {
      window.scrollTo(0,0)
      setTimeout(() => {
        setCargando(!cargando);
      }, 4000);
    };
    initFunction();
  }, []);
  console.log(cargando); */

  return (
    <div>
      <Head>
        <title>Restaurant QR Demo</title>
        <meta name="description" content="Restaurant QR Carta Demo " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="background mx-auto pb-6">
        {/* {cargando ? (
          <video autoPlay muted>
            <source src="/init.mp4" type="video/mp4" />
          </video>
        ) : null} */}

        <img
          src="/logo.png"
          alt="logo restaurant qr demo"
          className="logo-animation mx-auto   w-40 h-50 py-4 p-4"
        />

        <div className="flex">
          <div className=" w-1/5">
            <img src="/heineken.png" alt="heineken" className="p-4 md:p-8" />
            <img src="/cocacola.png" alt="heineken" className="p-4 md:p-8" />
          </div>

          <div className="w-3/5 md:grid md:grid-cols-2">
            <Link href="/breakfast">
              <a>
                <MainCard
                  src={"/breakfast.png"}
                  alt={"desayuno restaurant"}
                  title={"Desayuno"}
                />
              </a>
            </Link>
            <Link href="/lunch">
              <a>
                <MainCard
                  src={"/lunch.png"}
                  alt={"desayuno restaurant"}
                  title={"Principal"}
                />
              </a>
            </Link>
            <Link href="/promo">
              <a>
                <MainCard
                  src={"/promos.png"}
                  alt={"desayuno restaurant"}
                  title={"Promos"}
                />
              </a>
            </Link>
            <Link href="/drink">
              <a>
                <MainCard
                  src={"/drink.png"}
                  alt={"desayuno restaurant"}
                  title={"Bebidas"}
                />
              </a>
            </Link>
            <Link href="/cake">
              <a>
                <MainCard
                  src={"/cake.png"}
                  alt={"desayuno restaurant"}
                  title={"Postres"}
                />
              </a>
            </Link>
          </div>
          <div className="w-1/5"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <MainButton text="Agregar Reseña" src="./google.png" />
          <MainButton text="Pagar" src="./pay.png" />
        </div>
      </main>
    </div>
  );
}
