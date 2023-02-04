import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Header from '../components/header'
import "../styles/styles.scss"

const AboutPage: React.FC<PageProps> = () => {
    console.log('Hello World')
    return(
        <main>
            <Header />
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <Link to="/">Back to Home</Link>
        </main>
    )
}


export default AboutPage

export const Head: HeadFC = () => (
    <>
    <title>About</title>
    <meta name="description" content="Your description"/>
    </>
)