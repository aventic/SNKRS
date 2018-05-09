import Page from '@src/components/Page';
import { IPage } from '@src/interfaces/page';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ajax, AjaxResponse } from 'rxjs/ajax';

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

    private setPage(data: any) {
        this.setState({ page: data });
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    componentWillReceiveProps(nextProps: IPageResolverProps) {
        ajax
            .get(`/umbraco/api/content/getcontent?url=${nextProps.route.match.url}`)
            .subscribe(
                data => this.setPage(data.response),
                (error: AjaxResponse) => this.setPage(error.response)
            );
    }

    render() {
        return <Page page={this.state.page} />;
    }
}

export default PageResolver;
