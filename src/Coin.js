import { useEffect, useState } from "react"

function App () {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    const [usd, setUsd] = useState()
    const onchange = (event) => setUsd(event.target.value); //인풋
    const onSubmit = (event) => { //인풋 제출
        event.preventDefault();
        if(usd==="")
            {return;}
        setLoading(false)
        setUsd("");
    }

    useEffect(() => { //api 한번만 불러오면됨
        fetch("https://api.coinpaprika.com/v1/tickers") //원격 api 호출하는 방법
            .then((response) => response.json()) //리턴 받은 것 json 변환
            .then((json) => { 
                setCoins(json); //그 json을 coin으로 변환
            });
    }, [usd])

    return (
    <div>
        <h1> The coins!</h1> 

        <form onSubmit={onSubmit}> {/*변환해보려는 usd값 입력받음*/}
            <input onChange={onchange} type="number" value={usd} placeholder="type usd"></input>
        </form>

        {loading ? (
            <strong> Loading...</strong>
        ) : ( //변환된 값 출력
             <select>
                {coins.map((coin, index) => ( //coins 어레이 각 리스트 하나씩 뽑아옴
                    <option key={index}>
                        {coin.name} ({coin.symbol}): ${usd/(coin.quotes.USD.price)} USD
                    </option>
                ))}
            </select>

        )}
    </div>)
}

export default App;