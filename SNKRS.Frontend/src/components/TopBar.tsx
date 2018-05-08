// import Scroll from '@src/helpers/scroll';
import { IMainMenu } from '@src/interfaces/main-menu';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '@src/components/Scroll';

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
            <ul className="main-menu__list">
                {menu.map(menuItem => (
                    <li className="main-menu__item" key={menuItem.name}>
                        <Link className="main-menu__link" to={menuItem.url}>{menuItem.name}</Link>
                        {menuItem.children && this.recursiveMenu(menuItem.children)}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <Scroll>
                {scrollY => (
                    <header className={'top-bar ' + (scrollY > 0 ? 'top-bar_active' : '')}>
                        <div className="main-menu">{this.recursiveMenu(this.props.mainMenu)}</div>
                    </header>
                )}
            </Scroll>
        );
    }
}

export default TopBar;
