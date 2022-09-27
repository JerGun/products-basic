import { faL } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setIsLoading(false)
      setData(res.data)
      console.log(res.data)
    })
  }

  const addItem = (id) => {
    const item = {
      data: data.find((e) => e.id == id),
      quantity: 1
    }
    setCart([...cart, item])
  }

  return (
    <div className="h-full w-full bg-white select-none">
      <Head>
        <title>Exam Frontend</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar cartItems={cart} />
      {isLoading ? <Loader /> : <Hero data={data} />}
    </div>
  )
}
