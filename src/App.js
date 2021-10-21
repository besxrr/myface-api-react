import './App.css';
import './Navigation/navbar.scss'
import { PostsPage } from "./PostsPage/PostsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UsersPage } from "./UsersPage/UsersPage";
import { NavigationBar } from './Navigation/NavigationBar';

function App() {
  return (
    <Router>
        <NavigationBar/>
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
