import * as React from 'react'
import { Link, HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby Tutorial</h1>
      <p>I'm makeing this by following the Gatsby Tutorial.</p>
      <Link to = "/about">About</Link>
    </main>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage