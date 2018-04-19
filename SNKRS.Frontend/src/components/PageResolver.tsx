import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ServerRouteProps } from '@src/interfaces/server';

class PageResolver extends React.Component<ServerRouteProps, any> {
    constructor(props: ServerRouteProps) {
        super(props);

        this.state = {
            content: this.props.data.initialData.content,
            initialLoad: true
        };
    }

    componentDidMount() {
        this.getPage(this.props);
    }

    componentWillReceiveProps(nextProps: ServerRouteProps) {
        this.getPage(nextProps);
    }

    private getPage(props: ServerRouteProps) {
        if (this.state.initialLoad) {
            this.setState({ initialLoad: false });
        } else {
            const { url } = props.route.match;

            ajax
                .get(`/umbraco/api/content/getcontent?url=${url}`)
                .subscribe(
                    data => this.setState({ content: data.response }),
                    error => this.setState({ content: error.response })
                );
        }
    }

    render() {
        return (
            <div>{this.state.content.headline}</div>
        );
    }
}

export default PageResolver;