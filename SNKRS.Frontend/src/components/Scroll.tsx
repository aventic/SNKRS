import * as React from 'react';
import ScrollHelper from '@src/helpers/scroll';
import { ReactNode } from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface ScrollProps {
    children?: (scrollY: number) => ReactNode;
}

class Scroll extends React.Component<ScrollProps, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            scrollY: 0
        };
    }

    private destroy: Subject<void> = new Subject();

    componentDidMount() {
        ScrollHelper.scroll$.pipe(takeUntil(this.destroy)).subscribe(data => {
            this.setState({ scrollY: data });
        });
    }

    componentWillUnmount() {
        this.destroy.next();
        this.destroy.complete();
    }

    render() {
        return this.props.children(this.state.scrollY);
    }
}

export default Scroll;
