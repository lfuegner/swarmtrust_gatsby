import * as React from 'react'
import { Link, HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import "../styles/styles.scss"
const name:string = "React"

function formatName(user:any) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ludwig',
  lastName: 'Fügner'
};

function getGreeting(user:any) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;

  }
  return <h1>Hello, Stranger</h1>;
}

const element = <a href='https://www.reactjs.org'>link</a>

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <h1>Welcome to my {name} Tutorial</h1>
      <p>I'm makeing this by following the Gatsby Tutorial.</p>
      <Link to = "/about">About</Link>
      <h1>Hello, {formatName(user)}!</h1>
      <h1>{getGreeting(user)}!</h1>
    </main>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage