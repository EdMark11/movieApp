import MovieCard from "./MovieCard"


const Popular = ({movies}) => {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <div className="bg-slate-600 px-10 rounded-md pb-8 ">
        <h1 className="text-white text-2xl pt-4 mt-10 mb-5 font-semibold">Popular</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}</div>
      </div>
    </div>
  )
}

export default Popular