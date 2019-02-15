import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import { Provider, Subscribe } from 'unstated';
import enUs from 'antd/lib/locale-provider/en_US';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import AppHolder from './styles/commonStyle';
import theme from './settings/theme';
import AppContainer from './containers/App';

class App extends Component {
    render() {
        //let myApp = new AppContainer();
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <LocaleProvider locale={enUs}>
                        <AppHolder>
                            <Provider>
                                <Subscribe to={[AppContainer]}>
                                    { (appStore) => <Routes appStore={appStore} />}
                                </Subscribe>
                            </Provider>
                        </AppHolder>
                    </LocaleProvider>
                </HashRouter>
            </ThemeProvider>
        );
    }

}

export default hot(module)(App);
