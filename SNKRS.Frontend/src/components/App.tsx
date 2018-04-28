import * as React from 'react';
import { Route } from 'react-router-dom';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import PageResolver from '@src/components/PageResolver';

const App: React.StatelessComponent<any> = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="page">
                <Route path="*" component={PageResolver} />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default App;
