import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '@src/components/App';
import configureStore from '@src/store/configure-store';

interface IRoutingProps {
    path: string;
    data: { [key: string]: any };
}

const Routing: React.SFC<IRoutingProps> = (props: IRoutingProps) => {
    return (
        // <Provider store={configureStore(props.data)}>
        <StaticRouter location={props.path} context={{}}>
            <App data={props.data} />
        </StaticRouter>
        // </Provider>
    );
};

declare var global: any;

global['React'] = React;
global['ReactDOM'] = ReactDOM;
global['ReactDOMServer'] = ReactDOMServer;
global['Routing'] = Routing;
