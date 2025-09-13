import Link from "next/link"
import Image from "next/image"
import ordre from "../../../public/images/ordre-avocats.png"

export default function Navbar() {
    return (

        <div className="bg-indigo-950">
            <div className="fixed z-20 w-screen">
                <div className="bg-indigo-950 opacity-100">
                    <nav className="flex justify-evenly py-4">
                        <Link href="/">
                            <button className="flex items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-2">
                                <Image src={ordre} alt="Accueil" width={24} height={24} />
                                <span className="text-red-700 font-bold ml-2 hidden sm:inline">Accueil</span>
                            </button>
                        </Link>
                         <Link
                            href="/welcome"
                            className="flex items-center justify-center p-2 mx-1 w-fit text-white text-center shadow text-md transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            Cabinet
                        </Link>
                         <Link
                            href="/activities"
                            className="flex items-center justify-center p-2 mx-1 w-fit text-white text-center shadow text-md transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            Domaines d'activités
                        </Link>
                        <Link
                            href="/news"
                            className="flex items-center justify-center p-2 mx-1 w-fit text-white text-center shadow text-md transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            Actualités</Link>
                        <Link
                            href="/appointment"
                            className="flex items-center justify-center p-2 mx-1 w-fit text-white text-center shadow text-md transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            Rendez-vous </Link>
                    </nav>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
