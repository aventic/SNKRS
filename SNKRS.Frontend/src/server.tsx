import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server'
import App from '@src/components/App';

import { StaticRouter as Router } from 'react-router';

const Routing: React.StatelessComponent<any> = (props: any) => {
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