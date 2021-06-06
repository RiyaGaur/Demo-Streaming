import Main from './Components/Home/Main';
import Movies from './Components/Movies/Movies';
import Series from './Components/Series/Series';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Series" exact component={Series} />
          <Route path="/Movies" exact component={Movies} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
