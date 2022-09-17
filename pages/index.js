import Head from 'next/head'
import NavBar from '../components/NavBar'


export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await res.json()
  return{
    props:{ albums: data }
  }
}

export default function Home({ albums }) { 
  return (
    <div>
      <Head>
        <title>Home Page | Next.js </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
     <h1>Next</h1>
      { albums.map( album => (
        <div key={album.id}>
          <ul>
            <li>{ album.title }</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
