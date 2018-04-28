import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Settings } from '@src/interfaces/settings';
import { State } from '@src/interfaces/state';
import { MainMenu } from '@src/interfaces/main-menu';

interface HeaderProps {
    settings: Settings;
}

class Header extends React.Component<HeaderProps, any> {
    private recursiveMenu(menu: MainMenu[]): JSX.Element {
        return (
            <ul>
                {menu.map(menuItem => (
                    <li key={menuItem.name}>
                        <Link to={menuItem.url}>{menuItem.name}</Link>
                        {menuItem.children && this.recursiveMenu(menuItem.children)}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="header">
                <Link to={this.props.settings.url} className="header__logo">
                    SNKRS
                </Link>
                <video className="header__video" autoPlay loop>
                    <source src="/assets/dust.mp4" type="video/mp4" />
                </video>
                {/* {this.recursiveMenu(this.props.settings.mainMenu)} */}
            </div>
        );
    }
}

const mapStateToProps = ({ settings }: State) => {
    return { settings };
};

export default connect(mapStateToProps)(Header);
