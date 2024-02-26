import React, { Component, Fragment } from 'react';
import '../src/assets/css/custom.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';



export class App extends Component {
  render() {
    return (
    <Fragment>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Fragment>
    )
  }
}

export default App
