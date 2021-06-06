import { Router, Route, Switch } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Movie from './pages/Movie';
import history from './core/utils/history';

const Routes = () => {
    return (
        <Router history={history} >
           <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/movie exact">
                    <Movie />
                </Route>
                <Route path="/movie/:movieId">
                    <Movie />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;