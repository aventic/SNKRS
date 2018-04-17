import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import PageResolver from '@src/components/PageResolver';

const App: React.StatelessComponent<any> = (props: any) => {
    return (
        <React.Fragment>
            <Header />
            <Route path="*" component={(routeProps: RouteProps) => <PageResolver route={{...routeProps}} data={...props} />} />
            <Footer />
        </React.Fragment>
    );
};

export default App;