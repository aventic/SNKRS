import * as React from 'react';
import { Route } from 'react-router-dom';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import PageResolver from '@src/components/PageResolver';

const App: React.StatelessComponent<any> = () => {
    return (
        <React.Fragment>
            <Header />
            <Route
                path="*"
                component={PageResolver} />
            <Footer />
        </React.Fragment>
    );
};

export default App;