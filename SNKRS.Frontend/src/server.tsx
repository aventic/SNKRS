import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '@src/components/App';
import configureStore from '@src/store/configure-store';

interface RoutingProps {
    path: string;
    data: { [key: string]: any; };
}

const Routing: React.StatelessComponent<RoutingProps> = (props: RoutingProps) => {
    return (
        <Provider store={configureStore(props.data)}>
            <StaticRouter location={props.path} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    );
};

declare var global: any;

global['React'] = React;
global['ReactDOM'] = ReactDOM;
global['ReactDOMServer'] = ReactDOMServer;
global['Routing'] = Routing;