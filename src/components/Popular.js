import MovieCard from "./MovieCard"


const Popular = ({movies}) => {
  return (
    
      <div className="bg-teal-800 container max-w-8xl mx-auto pb-10 px-6 rounded-lg">
        <h1 className="text-white text-2xl pt-4 mt-10 mb-5 font-semibold">Popular</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}</div>
      </div>
    
    
  )
}

export default Popular