import Image from "next/image"
import Link from "next/link"

const Landing = () => {
  return (
        <div className='text-center container bg-white max-w-xl mx-auto pb-10 rounded-xl'>
            <div className='w-60 mx-auto'>
                <Image className="" src={"/watchmovie.png"} height={250} width={250} alt=""/>
            </div>
            <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to What's Poppin'</h1>
            <p className="text-gray-500">Browse the most popular movies right now!</p>
            <Link href="/contact">
                <button className="bg-red-600 text-white py-3 px-6 rounded text-sm mt-4 font-bold">Surprise me!</button>
            </Link>
            
        </div>
  )
}

export default Landing