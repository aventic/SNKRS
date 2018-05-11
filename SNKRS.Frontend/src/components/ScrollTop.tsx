import * as React from 'react';
import SvgIcon from '@src/components/SvgIcon';

class ScrollTop extends React.Component<any, any> {
    private handleClick = (): void => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    render() {
        return (
            <a
                href="javascript:void(0)"
                role="button"
                className="scroll-top"
                onClick={this.handleClick}
            >
                <SvgIcon className="scroll-top__icon" icon="arrow-up" />
            </a>
        );
    }
}

export default ScrollTop;
