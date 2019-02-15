import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import enUs from 'antd/lib/locale-provider/en_US';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import AppHolder from './styles/commonStyle';
import theme from './settings/theme';
import configureStore from './containers/setup';

export const { store } = configureStore();

class App extends Component {
    render() {
        //let myApp = new AppContainer();
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <LocaleProvider locale={enUs}>
                        <AppHolder>
                            <Provider store={store} >
                                <Routes />
                            </Provider>
                        </AppHolder>
                    </LocaleProvider>
                </HashRouter>
            </ThemeProvider>
        );
    }

}

export default hot(module)(App);
