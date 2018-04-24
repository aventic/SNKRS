import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '@src/interfaces/state';
import { Page } from '@src/interfaces/page';

interface PageProps {
    page: Page;
}

const Page: React.StatelessComponent<PageProps> = (props: PageProps) => {
    return (
        <div>
            {props.page.loading ? (<div>1</div>) : (<div>2</div>)}
            {props.page.headline} - {props.page.content}
        </div>
    );
};

const mapStateToProps = ({ page }: State) => {
    return { page };
};

export default connect(mapStateToProps)(Page);