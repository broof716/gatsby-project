import React from 'react'
import { Link } from 'gatsby';

import headerStyles from './header.module.scss'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to='/'>
          Bryan Roof
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Projects</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem}  to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}