'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export function NavBar() {

  const pathName = usePathname()

  const naviLinks = [
    { title: 'Home', path: '/' },
    { title: 'Listend jobs', path: '/Listend-jobs' },
    { title: 'NewsLetter', path: '/NewsLetter' },
    { title: 'Contact', path: '/Contact' },
    { title: 'About', path: '/About' },
  ]

  return (
    <nav className="w-full h-14 px-6 bg-white shadow-sm absolute top-0 flex z-10">
      <ul className="w-full md:px-12 flex items-center justify-between">
        <div className="text-indigo-500 font-bold text-xl cursor-pointer md:ml-3">
          Job <span className="text-indigo-300">Finder</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {naviLinks.map((navLink) => {
            const isPath = pathName.startsWith(navLink.path)
            return <li className={`font-medium text-sm ${isPath ? 'text-indigo-500': 'text-[#828ea8]'} transition-all duration-200 hover:text-indigo-500`}>
              <Link href={navLink.path}>{navLink.title}</Link>
            </li>
          })}
        </div>
      </ul>
    </nav>
  )
}