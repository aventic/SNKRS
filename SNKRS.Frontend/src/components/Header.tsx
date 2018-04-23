import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Settings } from '@src/interfaces/settings';
import { State } from '@src/interfaces/state';

interface HeaderProps {
    settings: Settings;
}

const Header: React.StatelessComponent<HeaderProps> = (props: HeaderProps) => (
    <div>
        <Link to={props.settings.url}>{props.settings.name}</Link> - <Link to="/contact">Contact</Link>
    </div>
);

const mapStateToProps = ({ settings }: State) => {
    return { settings };
};

export default connect(mapStateToProps)(Header);