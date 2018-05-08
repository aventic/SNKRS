import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import PageResolver from '@src/components/PageResolver';
import TopBar from '@src/components/TopBar';
import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface IAppProps {
    data: { [key: string]: any };
}

const App: React.SFC<IAppProps> = (props: IAppProps) => {
    return (
        <React.Fragment>
            <Header name={props.data.settings.name} url={props.data.settings.url} />
            <TopBar mainMenu={props.data.settings.mainMenu} />
            <div className="page">
                <Route
                    path="*"
                    render={(route: RouteComponentProps<void>) => (
                        <PageResolver page={props.data.page} route={route} />
                    )}
                />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default App;
