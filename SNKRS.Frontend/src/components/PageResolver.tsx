import Page from '@src/components/Page';
import { IPage } from '@src/interfaces/page';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Subscription } from 'rxjs';

interface IPageResolverProps {
    page: IPage;
    route: RouteComponentProps<void>;
}

interface IPageResolverState {
    page: IPage;
}

class PageResolver extends React.Component<IPageResolverProps, IPageResolverState> {
    constructor(props: IPageResolverProps) {
        super(props);

        this.state = {
            page: props.page
        };
    }

    private subscription: Subscription;

    private setPage(data: any, routeAction: string) {
        this.setState({ page: data });

        if (routeAction === 'PUSH') {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
    }

    componentWillReceiveProps(nextProps: IPageResolverProps) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        
        this.subscription = ajax
            .get(`/umbraco/api/content/getcontent?url=${nextProps.route.match.url}`)
            .subscribe(
                data => this.setPage(data.response, nextProps.route.history.action),
                (error: AjaxResponse) => this.setPage(error.response, nextProps.route.history.action)
            );
    }

    render() {
        return <Page page={this.state.page} />;
    }
}

export default PageResolver;
