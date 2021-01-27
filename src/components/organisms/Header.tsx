import { Link } from 'gatsby'
import * as React from 'react'

export const Header = (): JSX.Element => {
  return (
    <div className="bg-main">
      <div className="mx-auto max-w-screen-md py-6 px-4">
        <h1>
          <Link to="/" className="text-gray-100 ">
            Engine
          </Link>
        </h1>
      </div>
    </div>
  )
}
