import Link from "next/link"

export default function Footer() {
  return (
   <footer className="bg-indigo-950 text-center pb-4">
        <div className="p-4 grid grid-cols-2 gap-4 sm:grid-cols-4 text-yellow-500">
          <div className="justify-center items-center ">
            <ul className="rounded-lg hover:bg-indigo-900 w-full h-full max-w-64 p-2">
              <li className="font-bold sm:text-md">CONFRERES</li>
              <li className="text-sm/8 text-white">Autres spécialités</li>
            </ul>
          </div>
          <div>
            <ul className="rounded-lg hover:bg-indigo-900 w-full h-full max-w-64 p-2">
              <li className="font-bold">ACTUALITES</li>
              <li className="text-sm/8 text-white">blog</li>
            </ul>
          </div>
          <div>
            <ul className="rounded-lg hover:bg-indigo-900 w-full h-full max-w-64 p-2">
              <li className="font-bold">RESEAUX SOCIAUX</li>
              <li className="text-sm/8 text-white">Instagram</li>
            </ul>
          </div>
          <div className="rounded-lg hover:bg-indigo-900 p-4 pb-20">
            <ul>
              <li className="font-bold">CONTACT</li>
              <li className="text-sm/8 text-white">2 Allée d'Orléans
                33000 BORDEAUX</li>
              <li className="text-sm/8 text-white hidden sm:block">ugo.ayivi@hedac.fr</li>
              <li className="text-sm/8 text-white hidden sm:block">05 56 23 87 20</li>
            </ul>
          </div>
        </div>
        <Link href="" className="text-white">Ugo AYIVI - © 2025 - Tous droits réservés.</Link>
      </footer>
  )
}
