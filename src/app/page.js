// import * as motion from "motion/react-client"
import Image from "next/image";
import bdx from "../../public/images/bordeaux.png";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-yellow-50 p-4">
      <h1 className="pb-14 text-6xl text-center font-bold">
        <span className="p-2 text-stone-700">
          Ugo AYIVI
        </span>
      </h1>
      <h3 className="text-4xl text-center font-bold animate-pulse">
        <span className="p-2 tracking-widest">
          AVOCAT A LA COUR
        </span>
      </h3>
      <div className="mt-4">
        <Image
          src={bdx}
          alt="Logo de Bordeaux"
          className="fixed bottom-0 right-0 m-4 size-10"
        />
      </div>
    </div>
  );
}
