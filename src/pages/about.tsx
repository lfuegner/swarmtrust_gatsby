import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const AboutPage: React.FC<PageProps> = () => {
    return(
        <main>
            <h1>Meine erste About page mit Gatsby und react</h1>
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About</title>