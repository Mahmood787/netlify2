import { Link, navigate } from "gatsby"
import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
       <Header title="Index Page"/>
        yHello world
      <br/>
      <Link to="/about">about</Link>
      <button onClick={()=>{
        navigate('/about')
      }}>Nevigate About page with button</button>     
    </Layout>

  )
}
