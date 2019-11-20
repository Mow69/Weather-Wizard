import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Cities from "./City/Cities";
import CityPage from "./City/CityPage";
// import '../css/App.scss';
import NotFound from "./NotFound";

class App extends Component {
    render = () => {
        return (
            <>
                <Nav/>
                <div className="container">
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/city/:id" component={CityPage}/>
                                <Route exact path="/" component={Cities}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </>
        );
    };
}

export default App;
