'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export function Footer() {

  const pathName = usePathname()

  const naviLinks = [
    { title: 'About', path: '/About' },
    { title: 'Terms and conditions', path: '/terms' },
    { title: 'NewsLetter', path: '/NewsLetter' },
    { title: 'Services', path: '/Services' },
    { title: 'Contact', path: '/Contact' },
  ]

  return (
    <footer className="w-full md:h-14 h-auto md:py-0 bg-white shadow-sm flex">
      <nav className="flex md:flex-row flex-col w-full md:gap-0 gap-6 md:px-[66px] px-6 md:items-center items-start justify-between">
        <div className="text-indigo-500 font-bold text-xl cursor-pointer md:ml-3">
          <Link href='/'>
            Job <span className="text-indigo-300">Finder</span>
          </Link>
        </div>
        <ul className="flex md:flex-row flex-col md:items-center items-start gap-4">
          {naviLinks.map((navLink) => {

            const isPath = pathName.startsWith(navLink.path)

            return (
              <li key={navLink.path} className={`font-medium text-sm ${isPath ? 'text-indigo-500' : 'text-[#828ea8]'} transition-all duration-200 hover:text-indigo-500`}>
                <Link href={navLink.path}>{navLink.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}