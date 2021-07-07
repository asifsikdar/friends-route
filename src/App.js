
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/home">
           <Home/>
        </Route>
        <Route Route path = "/Friend/:Id">
          <FriendDetails/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
