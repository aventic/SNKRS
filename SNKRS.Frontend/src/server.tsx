import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router';
import { ServerProps } from '@src/interfaces/server';
import App from '@src/components/App';

const Routing: React.StatelessComponent<ServerProps> = (props: ServerProps) => {
    return (
        <Router location={props.path} context={{}}>
            <App {...props} />
        </Router>
    );
};

declare var global: any;

global['React'] = React;
global['ReactDOM'] = ReactDOM;
global['ReactDOMServer'] = ReactDOMServer
global['Routing'] = Routing;