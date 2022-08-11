import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Detail () { 
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams(); //현재 url의 변경된 부분만 catch, 아래 링크에서 덧붙여 쓰임

    const getMovie = async() => { //링크에서 json 가져오는 부분
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setDetail(json.data.movie); // 위 링크에서 영화의 디테일 정보를 어레이에 저장
        setLoading(false); //링크 받아왔으니 로딩창 끔
    };

    useEffect(() => {
        getMovie();
    }, []) //링크 한번만 불러와

    return ( //리턴 내에선 무조건 태그로 감싸는 습관!!
        <div> 
            {loading ? <h1> loading... </h1> : 
                <div>
                    <img src = {detail.background_image_original} />
                    <p>{detail.title}</p>
                    <ul>
                    {detail.genres.map((g) => (
                        <li key={g}>
                            {g}
                        </li>
                    ))}
                    </ul>
                </div>
            }
            

        </div>

        )
} 

export default Detail