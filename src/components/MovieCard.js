import Image from "next/image"
import Link from "next/link"

const MovieCard = ({movie}) => {
  return (
    <Link className="" href={`/movie/${movie.id}`} passHref>
      <div className="bg-gradient-to-b from-white from 10% via-teal-100 via-90%  h-full shadow-lg rounded-md cursor-pointer">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={700} height={800} className="rounded-t-md" alt=""/>
        <div className="px-6 py-2">
          <div className="font-bold text-lg mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default MovieCard