import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@src/components/App';

import { BrowserRouter as Router } from 'react-router-dom';

const Routing: React.StatelessComponent<any> = (props: any) => {
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