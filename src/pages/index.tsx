import * as React from 'react'
import { Link, HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Announcement from "../components/announcement"
import "../styles/styles.scss"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className='main-container'>
      <Announcement />
      <Header />
      <h1>Let's watch out together!</h1>
      <h2>Independent, impartial and transparent</h2>
    </main>
  )
}

export const Head: HeadFC = () => <title>Swarmtrust</title>

export default IndexPage