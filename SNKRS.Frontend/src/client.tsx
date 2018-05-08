import './styles/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@src/components/App';
import configureStore from '@src/store/configure-store';

interface RoutingProps {
    path: string;
    data: { [key: string]: any };
}

const Routing: React.SFC<RoutingProps> = (props: RoutingProps) => {
    return (
        // <Provider store={configureStore(props.data)}>
            <BrowserRouter>
                <App data={props.data} />
            </BrowserRouter>
        // </Provider>
    );
};

declare var global: any;

global['React'] = React;
global['ReactDOM'] = ReactDOM;
global['Routing'] = Routing;
