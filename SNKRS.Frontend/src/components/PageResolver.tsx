import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';

class PageResolver extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        console.log(this.props);
    }

    componentDidMount() {
        if (this.props.route.match.url !== this.props.data.path) {
            ajax.get('/umbraco/api/settings/getsettings')
                .subscribe((data) => console.log(data.response));
        }
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.route.match.url !== this.props.data.path) {
            ajax.get('/umbraco/api/settings/getsettings')
                .subscribe((data) => console.log(data.response));
        }
    }

    render() {
        return (
            <div>123</div>
        );
    }
}

export default PageResolver;