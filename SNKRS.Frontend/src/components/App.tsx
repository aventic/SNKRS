import * as React from 'react';
import { Route, RouteComponentProps, Link } from 'react-router-dom';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import PageResolver from '@src/components/PageResolver';
import { ServerProps } from '@src/interfaces/server';

const App: React.StatelessComponent<ServerProps> = (props: ServerProps) => {
    return (
        <React.Fragment>
            <Header />
            <Route
                path="*"
                render={(routeProps: RouteComponentProps<void>) => <PageResolver data={props} route={routeProps} />} />
            <Footer />
        </React.Fragment>
    );
};

export default App;