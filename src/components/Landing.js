import Image from "next/image"
import Link from "next/link"

const Landing = () => {
  return (
        <div className='text-center bg-white pb-10'>
            <div className='w-60 mx-auto'>
                <Image src={"/watchmovie.png"} height={250} width={250} alt=""/>
            </div>
            <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to APPNAME</h1>
            <p className="text-gray-500">Browse the latest movies!</p>
            <Link href="/contact">
                <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">CONTACT</button>
            </Link>
            
        </div>
  )
}

export default Landing