import { Link } from 'gatsby'
import * as React from 'react'

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <div className="bg-main flex flex-row">
        <div className="py-6 px-4 flex-grow-0">
          <h1>
            <Link to="/" className="text-gray-100 ">
              Engine
            </Link>
          </h1>
        </div>
        <nav className="flex-grow hidden md:block">
          <ul className="h-full flex flex-row-reverse items-center px-4">
            <li className="mx-1">
              <Link to="/members" className="text-gray-100">
                メンバー
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/teams" className="text-gray-100">
                チーム
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/activity_log" className="text-gray-100">
                活動記録
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/portfolios" className="text-gray-100">
                ポートフォリオ
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/about" className="text-gray-100">
                Engineについて
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex-grow md:hidden flex flex-row items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none right-3 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-accent text-sm">menu</span>
          </button>
        </nav>
      </div>
      <div
        className={`md:hidden fixed z-10 h-full w-screen bg-main bg-opacity-80 overflow-y-scroll ${
          menuOpen ? '' : 'hidden'
        }`}>
        <ul className="mx-auto py-16 px-12">
          <li className="mb-8 border-b-2 border-accent text-center">
            <Link
              className="block my-4 text-accent font-bold text-lg"
              onClick={() => setMenuOpen(false)}
              to="/members">
              メンバー
            </Link>
          </li>
          <li className="mb-8 border-b-2 border-accent text-center">
            <Link
              className="block my-4 text-accent font-bold text-lg"
              onClick={() => setMenuOpen(false)}
              to="/teams">
              チーム
            </Link>
          </li>
          <li className="mb-8 border-b-2 border-accent text-center">
            <Link
              className="block my-4 text-accent font-bold text-lg"
              onClick={() => setMenuOpen(false)}
              to="/activity_log">
              活動記録
            </Link>
          </li>
          <li className="mb-8 border-b-2 border-accent text-center">
            <Link
              className="block my-4 text-accent font-bold text-lg"
              onClick={() => setMenuOpen(false)}
              to="/portfolios">
              ポートフォリオ
            </Link>
          </li>
          <li className="mb-8 border-b-2 border-accent text-center">
            <Link
              className="block my-4 text-accent font-bold text-lg"
              onClick={() => setMenuOpen(false)}
              to="/about">
              Engineについて
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
