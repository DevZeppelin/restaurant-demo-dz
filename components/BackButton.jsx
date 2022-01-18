import { useRouter } from "next/router";

const BackButton = () => {

    const router = useRouter();
    return (
        <div className="flex justify-center">
        <button
          className="py-3 px-10 my-4 text-lg uppercase font-bold border-2 border-blue bg-dgray text-blue rounded-xl"
          onClick={() => router.back()}
        >
          Volver 👈
        </button>
      </div>
    )
}

export default BackButton
