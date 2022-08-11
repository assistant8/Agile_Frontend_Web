import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App () {
   return <Router>
    <Switch>
        <Route path="/movie/:id">
            <Detail />
        </Route>
        <Route path="/"> {/*홈으로 간다는 뜻 - home route를 렌더링 - home이 가장 아래 있어야하는듯?*/}
            <Home />
        </Route>
        
    </Switch>
   </Router>
}

export default App;