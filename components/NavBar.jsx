import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
        <ul>
            <li>
                <Link href="/">Home Page</Link>
            </li>
            <li>
                <Link href="/contact">Contact Page</Link>
            </li>
            <li>
                <Link href="/about">About Page</Link>
            </li>
        </ul>
    </div>
  )
}
