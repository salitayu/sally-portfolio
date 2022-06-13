import Head from 'next/head'
import Portfolio from '../src/components/Portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="This is the portfolio website for Sally Tan, a Software Engineer living in Melbourne, Florida. 
        Sally is currently a product engineer at Kiddom where she is helping build an educational technology software for teachers and students to communicate with each other.
        She has also worked in various industries, providing full stack expertise to them.
        In Sally's free time, she enjoys creating programming tutorials, building web applications, and attending hackathans.
        Come learn more about her here." />
        <meta name="keywords" content="Sally, Tan, Software, Product, Engineer, Computer, Science, Technology, Frontend, Backend, Web, Development, Data, Scientist, Portfolio, Personal, Website, Salita, Programming, Stan, HTML, CSS, JavaScript, ReactJS, Python, Django, Go, Golang, Melbourne, Florida, USA, United, States"/>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sally Tan" />
        <link rel="icon" type="image/x-icon" href="/images/logo.png"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <title>Sally Tan Yu Portfolio</title>
      </Head>
      <Portfolio/>
    </>
  )
}
