import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-slate-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className='text-black font-bold' href="/"><Image width={100} height={100} src={'/vercel.svg'} />
                {/* <a className="text-white font-bold">My Logo</a> */}
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className='text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium' href="/">Home
                  {/* <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a> */}
                </Link>
                <Link className='text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium' href="/product">Product
                  {/* <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// export default Navbar

// import Link from 'next/link'
// export function Navbar() {
//   // navbar is a component that contains the navigation bar
//   return (


//     <ul>
//       <li>
//         <Link href={"/"}>Home</Link>
//       </li>
//       <li>
//         <Link href={"/about"}>About</Link>
//       </li>
//       <li>
//         <Link href={"/product"}>Products</Link>
//       </li>
//     </ul>
//   )
// }