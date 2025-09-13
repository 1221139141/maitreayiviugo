import Image from "next/image";
import maitre from "../../../public/images/maitre-ayivi.jpeg"

export default function page() {
  return (
    <main className="">
      <section className="relative border-2 border-transparent bg-[url('../../public/images/miroir-eau.jpeg')] bg-no-repeat bg-center h-200 saturate-200">
        <h2 className="bg-gray-50/50 py-2 w-1/2 text-3xl sm:text-4xl xl:text-5xl mt-110  text-gray-900 text-left font-bold md:w-1/2">Votre partenaire légal pour chaque étape de votre carrière.</h2>
        <h3 className="mt-10 text-2xl sm:text-3xl xl:text-4xl text-left text-gray-900 text-semibold">Offrez vous une vie plus juste avec un avocat qui met en avant l&apos;humain.</h3>
        <div className="relative grid h-155 grid-cols-2 content-end gap-4 mb-10">
        </div>
      </section>
      <div className="flex flex-col-reverse lg:flex-row text-justify md:justify-center items-center p-4 sm:p-10">
        {/* DIV DESCRIPTION*/}
        <div className="m-10 max-w-xs:w-1/3 text-xl mb-4 font-secondary">
          <div className="font-bold text-2xl pb-6">
              Maître AYIVI est titulaire d'un Master II droit des affaires de Aix-Marseille.
              Installé depuis plusieurs années à Bordeaux, les juridictions bordelaises et girondines n'ont plus aucun secret pour lui.
              
          </div>
          <div className="pb-6">
            Sa pratique, enrichie par ses différentes expériences professionnelles est aujourd'hui axée vers le droit social, le droit pénal et le contentieux civil et commercial.
          </div>
          <div className="py-6">
            Grâce à sa double expérience en entreprise et en cabinet d’avocat, Maître AYVI est aujourd'hui à même d'anticiper et de traiter aussi bien les problématiques opérationnelles que juridiques et vous conseiller au mieux dans vos démarches.
          </div>
          <div className="py-6">
            Maître AYIVI compte notamment parmi les quelques praticiens des modes amiables de règlements à l'échelle locale ce qui rend particulièrement efficace dans la résolution négociée des différents.
            <div className="py-6">
              Sa pratique est axée sur des valeurs des rigueurs, de réactivité et de résultats.
            </div>
          </div>
          <div className="text-xl max-xs:text-xs pb-6">
            Que vous soyez salarié ou employeur, qu'importe les enjeux, Maître AYIVI emploiera toutes ses compétences afin de vous accompagner tout le long de vos démarches juridiques.
          </div>
        </div>
        {/* DIV PHOTO MAITRE AYIVI*/}
        <div className="w-full md:w-1/2 lg:w-1/2 p-10">
          <Image
            src={maitre}
            alt="Maitre Ugo AYIVI"
            // className="w-96 h-120 min-w-56 min-h-100 object-cover p-4"
            className="h-160 object-cover"
          />
        </div>
      </div>
    </main>
  )
}

