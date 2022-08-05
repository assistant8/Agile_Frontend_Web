import { useEffect, useState } from "react"

function App () {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    useEffect(() => { //api 한번만 불러오면됨
        fetch("https://api.coinpaprika.com/v1/tickers") //원격 api 호출하는 방법
            .then((response) => response.json()) //리턴 받은 것 json 변환
            .then((json) => { //그 json을 coin으로 변환
                setCoins(json)
                setLoading(false) //각기 다른 변수를 설정
            })
    }, [])

    return <div>
        <h1> The coins! {loading ? "" : `${coins.length}`}</h1> {/*로딩이면 x 아니면 코인 개수 보여줌 */}
        {loading ? (
            <strong> Loading...</strong>
        ) : ( //로딩 끝나면 로딩메시지 없애고 
            <select>
                {coins.map((coin) => ( //coins 어레이 각 리스트 하나씩 뽑아옴
                    <option>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>
        )}
    </div>
}

export default App;