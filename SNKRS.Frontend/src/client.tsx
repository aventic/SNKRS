import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ServerProps } from '@src/interfaces/server';
import App from '@src/components/App';

const Routing: React.StatelessComponent<ServerProps> = (props: ServerProps) => {
    return (
        <Router>
            <App {...props} />
        </Router>
    );
};

declare var global: any;

global['React'] = React;
global['ReactDOM'] = ReactDOM;
global['Routing'] = Routing;