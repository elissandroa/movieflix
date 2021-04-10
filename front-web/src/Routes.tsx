import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';

const Routes = () => {
    return (
        <BrowserRouter>
       <Navbar visible = {true}/>
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