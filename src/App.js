import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';
import { ThemeProvider } from 'styled-components';
import MainLayout from './layouts/MainLayout';
import theme from './settings/theme';

class App extends Component {

    state = {};

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <LocaleProvider locale={ptBR}>
                        <MainLayout />
                    </LocaleProvider>
                </HashRouter>
            </ThemeProvider>
        );
    }

}

export default hot(module)(App);
