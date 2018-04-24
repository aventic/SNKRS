import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchPageAction } from '@src/actions/page';
import Page from '@src/components/Page';

class PageResolver extends React.Component<RouteComponentProps<void> & DispatchProp<Function>, any> {
    componentWillReceiveProps(nextProps: RouteComponentProps<void>) {
        const { url } = nextProps.match;
        this.props.dispatch(fetchPageAction(url));
    }

    render() {
        return (
            <Page />
        );
    }
}

export default connect()(PageResolver);