import { Navbar } from "@/src/components/navbar.component"

export default function Product(props) {
  console.log(props)
  return (
    <div>
      <Navbar />
      <div>
        <h1 className='flex items-center justify-center text-4xl font-bold m-6 p-6'>Product Detail</h1>
      </div>
      <p className="flex items-center justify-center font-bold text-xl">Product id = {props?.productId}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.params
  console.log(productId)

  return {
    props: {
      productId,
    },
  }
}