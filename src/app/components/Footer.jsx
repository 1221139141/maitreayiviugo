"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [visitCount, setVisitorCount] = useState(0)
  useEffect(() => {
    const currentCount = localStorage.getItem("visitCount")
    if (currentCount) {
      const newCount = parseInt(currentCount) + 1;
      setVisitorCount(newCount)
      localStorage.setItem("visitCount", newCount)
    }
    else {
      setVisitorCount(1)
      localStorage.setItem("visitCount", 0)
    }
  }, [])


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
            <li className="text-sm/8 text-white hidden sm:block">ugo.ayivi@avocat.fr</li>
            <li className="text-sm/8 text-white hidden sm:block">05 56 23 87 20</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="p-4 h-10 bg-blue-950 border border-blue-800 rounded-lg flex justify-center items-center font-bold text-blue-900">Visiteurs : {visitCount}</div>
      </div>
      <Link href="" className="text-white">Ugo AYIVI - © 2025 - Tous droits réservés.</Link>
    </footer>
  )
}
