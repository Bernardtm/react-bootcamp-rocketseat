import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import "./style.css";
import GlobalStyle from './styles/global';
import Main from './pages/Main'


class App extends Component {

    handleClick = () => {
    }

    render() {
        console.log("Render...")
        return (
            <Fragment>
                <GlobalStyle />
                <Main />
            </Fragment>
        );
    }
}

render(<App />, document.getElementById('app'));
