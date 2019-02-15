import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import enUs from 'antd/lib/locale-provider/en_US';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import AppHolder from './styles/commonStyle';
import theme from './settings/theme';

class App extends Component {
    
    render() {
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <LocaleProvider locale={enUs}>
                        <AppHolder>
                            <Routes />
                        </AppHolder>
                    </LocaleProvider>
                </HashRouter>
            </ThemeProvider>
        );
    }

}

export default hot(module)(App);
