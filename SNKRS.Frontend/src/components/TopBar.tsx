import * as React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '@src/helpers/scroll';
import { IMainMenu } from '@src/interfaces/main-menu';

interface ITopBarProps {
    mainMenu: IMainMenu[];
}

interface ITopBarState {
    active: boolean;
}

class TopBar extends React.Component<ITopBarProps, ITopBarState> {
    constructor(props: ITopBarProps) {
        super(props);

        this.state = {
            active: false
        };
    }

    private recursiveMenu(menu: IMainMenu[]): JSX.Element {
        return (
            <ul style={{ float: 'left' }}>
                {menu.map(menuItem => (
                    <li style={{ float: 'left' }} key={menuItem.name}>
                        <Link to={menuItem.url}>{menuItem.name}</Link>
                        {menuItem.children && this.recursiveMenu(menuItem.children)}
                    </li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        Scroll.scroll$.subscribe(data => {
            if (data > 0) {
                this.setState({ active: true });
            } else {
                this.setState({ active: false });
            }
        });
    }

    render() {
        return (
            <header className={'top-bar ' + (this.state.active ? 'top-bar_active' : '')}>
                {this.recursiveMenu(this.props.mainMenu)}
            </header>
        );
    }
}

export default TopBar;
