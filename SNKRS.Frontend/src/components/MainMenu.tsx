import { IMainMenu } from '@src/interfaces/main-menu';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface IMainMenuProps {
    mainMenu: IMainMenu[];
}

interface IMainMenuState {
    hidden: boolean;
}

class MainMenu extends React.Component<IMainMenuProps, IMainMenuState> {
    constructor(props: IMainMenuProps) {
        super(props);

        this.state = {
            hidden: false
        };
    }

    private recursiveMenu(menu: IMainMenu[]): JSX.Element {
        return (
            <div className="main-menu-dropdown">
                <ul className="main-menu-dropdown__list">
                    {menu.map(menuItem => (
                        <li className="main-menu-dropdown__item" key={menuItem.name}>
                            <Link
                                className="main-menu-dropdown__link"
                                to={menuItem.url}
                                onClick={() => this.setState({ hidden: true })}
                            >
                                {menuItem.name}
                            </Link>
                            {menuItem.children && this.recursiveMenu(menuItem.children)}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="main-menu">
                <ul className="main-menu__list">
                    {this.props.mainMenu.map(menuItem => (
                        <li className="main-menu__item" key={menuItem.name}>
                            <NavLink
                                className="main-menu__link link-effect"
                                to={menuItem.url}
                                onClick={() =>
                                    menuItem.children &&
                                    menuItem.children.length > 0 &&
                                    this.setState({ hidden: true })
                                }
                                onMouseEnter={() => this.setState({ hidden: false })}
                                activeClassName="link-effect_active"
                            >
                                {menuItem.name}
                            </NavLink>

                            <div
                                className={
                                    'main-menu__dropdown ' +
                                    (this.state.hidden ? 'main-menu__dropdown_hidden' : '')
                                }
                            >
                                {menuItem.children && this.recursiveMenu(menuItem.children)}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MainMenu;
