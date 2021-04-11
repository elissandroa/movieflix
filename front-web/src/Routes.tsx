import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Movie from './pages/Movie';

const Routes = () => {
    return (
        <BrowserRouter>
           <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/movie">
                    <Movie />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;