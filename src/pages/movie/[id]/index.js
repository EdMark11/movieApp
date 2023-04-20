import axios from "axios";
import server from '../../../../config/index'
import Image from "next/image";

const Movie = ({movie}) => {
    console.log(movie)
  return (
    <div className="container max-w-4xl mx-auto pt-6">
        <div className="px-3"> Hello
            {/* <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={1000} height={600} className="rounded-md" alt=""/> */}
        </div>  

    </div>
  )
}

export async function getStaticProps( /* {context} */) {
    /* const {id} = context.params; */
    const res = await axios(`${server}/76600?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const movie = res.data;
  
    return {
      props: { movie }
    }
  }
  
    export async function getStaticPaths() {
        const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
        const movies = res.data.results;
  
        const ids = movies.map(movie => movie.id);
        const paths = ids.map(id => ({ params: {id: id.toString() }}))
        
    return {
      paths,
      fallback: false
    }
  } 

export default Movie