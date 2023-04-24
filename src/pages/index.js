import Landing from "../components/Landing";
import axios from 'axios'
import {server} from '../../config/index'
import Popular from "@/components/Popular";

export default function Home({movies}) {
  return (
    <div className="">
      <Landing />
      <Popular movies={movies.results}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data

  return {
    props: { movies }
  }
}

