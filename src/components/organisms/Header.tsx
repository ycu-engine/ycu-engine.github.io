import { Link } from 'gatsby'
import * as React from 'react'

export const Header = (): JSX.Element => {
  return (
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}>
            Engine
          </Link>
        </h1>
      </div>
    </div>
  )
}
