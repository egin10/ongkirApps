import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './pages/Home';
import Detail from './pages/Detail';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar={true}>
                    <Scene key='home' component={Home} initial={true} />
                    <Scene key='detail' component={Detail} />
                </Scene>
            </Router>
        );
    }
}

export default Routes;