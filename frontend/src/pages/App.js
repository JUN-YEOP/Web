import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import Sneakers from './Sneakers';
import NewSneakers from './NewSneaker';
import SneakerCalendar from "./SneakerCalendar";

class App extends React.Component {

    render() {
        return (
            <div className='App'>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Sneakers}/>
                    <Route exact path="/sneaker/calendar" component={SneakerCalendar}/>
                    <Route exact path="/sneaker/new" component={NewSneakers}/>
                </Switch>
            </Router>
            </div>
        );

    }
}

export default App;


