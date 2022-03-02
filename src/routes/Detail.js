import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  // console.log(id)

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json)
    setMovie(json.data.movie)
    setLoading(false)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <ul>
            <li>평점 : {movie.rating}</li>
            <li>런타임 : {movie.runtime}분</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Detail
