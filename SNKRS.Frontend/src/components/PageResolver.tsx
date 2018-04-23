import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { setPage } from '@src/actions/page';
import Page from '@src/components/Page';

class PageResolver extends React.Component<RouteComponentProps<void> & DispatchProp<Function>, any> {
    componentWillReceiveProps(nextProps: RouteComponentProps<void>) {
        const { url } = nextProps.match;

        ajax
            .get(`/umbraco/api/content/getcontent?url=${url}`)
            .subscribe(
                data => this.props.dispatch(setPage(data.response)),
                error => this.props.dispatch(setPage(error.response))
            );
    }

    render() {
        return (
            <Page />
        );
    }
}

export default connect()(PageResolver);