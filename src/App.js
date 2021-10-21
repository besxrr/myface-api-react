import './App.css';
import {PostsPage} from "./PostsPage/PostsPage";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {UsersPage} from "./UsersPage/UsersPage";

function App() {
  return (
    <Router>
        <h1>MyFace</h1>
        <Switch>
            <Route path="/posts">
                <PostsPage/>
            </Route>
            <Route path="/users">
                <UsersPage/>
            </Route>
            <Route path="">
                <div>Page you were looking for doesnt exist</div>
                <Link to ="/posts"> Click here </Link>
                <Link to ="/users"> Click now </Link>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
