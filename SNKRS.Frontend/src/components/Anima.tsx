import * as React from 'react';
import PlatformHelper from '@src/helpers/platform';

interface IAnimaProps {
    toggle: boolean;
    delay?: number;
    children?: (active: boolean) => React.ReactNode;
}

interface IAnimaState {
    visible: boolean;
    active: boolean;
}

class Anima extends React.Component<IAnimaProps, IAnimaState> {
    constructor(props: IAnimaProps) {
        super(props);

        this.state = {
            visible: false,
            active: false
        };
    }

    private timeout: number;

    componentWillReceiveProps(nextProps: IAnimaProps) {
        if (nextProps.toggle) {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }

            this.setState({ visible: nextProps.toggle });

            this.timeout = window.setTimeout(() => {
                this.setState({ active: true });
            }, 10);
        } else {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }

            this.setState({ active: false });

            this.timeout = window.setTimeout(() => {
                this.setState({ visible: nextProps.toggle });
            }, nextProps.delay);
        }
    }

    render() {
        return this.state.visible ? this.props.children(this.state.active) : null;
    }
}

export default Anima;
