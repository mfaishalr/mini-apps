import Card from "@/src/components/card.component";
import { Loading } from "@/src/components/loading.component";
import { Navbar } from "@/src/components/navbar.component";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fethcData = () => {
      setLoading(true)
      axios.get('http://localhost:3000/api/product').then(
        (res) => {
          setData(res.data.data)
          setLoading(false)
        }
      ).catch(
        (err) => {
          console.log(err)
          setLoading(false)
        }
      )
    }
    fethcData()
  }, [])

  let counter = 0
  let content = loading ? <Loading /> :
    <div className="container mx-auto my-auto grid grid-cols-4 gap-4">
      {data.map((item, index) => {
        if (counter >= 20) {
          return null
        }
        counter++
        return (
          <Link href={`/product/${item.id}`} key={index}>
            <Card
              title={item.title}
              description={item.title}
              image={item.url}
            />
          </Link>
        )
      })}
    </div>

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <h1 className='text-4xl font-bold m-6 p-6'>Product List</h1>
      </div>
      {content}
    </div>
  )
}