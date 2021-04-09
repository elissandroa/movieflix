import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './core/pages/Home';
import Movie from './core/pages/Movie';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
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