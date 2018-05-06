import { IPage } from '@src/interfaces/page';
import * as React from 'react';

interface IPageProps {
    page: IPage;
}

class Page extends React.Component<IPageProps, any> {
    constructor(props: IPageProps) {
        super(props);

        this.setBrowserTitle(props.page.seo.title);
    }

    private setBrowserTitle(title: string) {
        if (typeof window !== 'undefined') {
            document.title = title;
        }
    }

    componentWillReceiveProps(nextProps: IPageProps) {
        this.setBrowserTitle(nextProps.page.seo.title);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column">
                        {this.props.page.headline}
                        <br />
                        {this.props.page.content}
                    </div>
                    <div className="column">
                        {this.props.page.headline}
                        <br />
                        {this.props.page.content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;