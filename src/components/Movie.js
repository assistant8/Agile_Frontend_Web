import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, medium_cover_image, title, summary, genres}) { //prop은 obj
    return(
                    <div>
                        <img src={medium_cover_image} alt="title"/>
                        <h1>
                            {/*<a href="/movie">{title}</a>*/}
                            <Link to={`/movie/${id}`}>{title}</Link>
                        </h1>
                        <p>{summary}</p>
                        <ul>
                            {genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                        </ul>
                         
                    </div>
    )
}

//각 prop이 어떤 타입이어야 하는지 정함
Movie.propTypes = {
    id:PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}


//우선 각 무비에 해당하는 html을 app.js에서 가져와서 만듦, 코드 정리라고 함
//key 필요없으니 지우고 movie.가 정의되지 않았으니 지우고 title 등 정의 안되었기 때문에 app에서 파라미터로(prop으로) 받아와야함
//Movie compo는 이 property를 다 부모 compo에서 받아옴
export default Movie;