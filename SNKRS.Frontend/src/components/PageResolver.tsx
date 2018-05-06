import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ajax } from 'rxjs/observable/dom/ajax';
import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';
import { IPage } from '@src/interfaces/page';
import Page from '@src/components/Page';

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

    componentWillReceiveProps(nextProps: IPageResolverProps) {
        ajax
            .get(`/umbraco/api/content/getcontent?url=${nextProps.route.match.url}`)
            .subscribe(
                data => this.setState({ page: data.response }),
                (error: AjaxResponse) => this.setState({ page: error.response })
            );
    }

    render() {
        return <Page page={this.state.page} />;
    }
}

export default PageResolver;
