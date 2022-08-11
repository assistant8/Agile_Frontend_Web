import { useEffect, useState } from "react"
import Movie from "../components/Movie"

function Home () {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        .then((response) => response.json()) //json이 반환받는 object
        .then((json) => {
            setMovie(json.data.movies); //log 찍어보면 ob 안 data 안 movies에 영화 어레이 있음
            setLoading(false); //영화 로딩 끝났으니 이 때 한번 false로 만들기
        })
    }, [])
    

    return (
        <div>
            {loading ? <h1>Wait please</h1> : 
            <div> 
                {movie.map((movie) => (  
                    <Movie 
                    key={movie.id} //추가 중요
                    id={movie.id} //링크로 넘길때 사용
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    />                   

                ))}
            </div>
            }
            
        </div>        
    )

}

export default Home;