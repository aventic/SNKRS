import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps {
    name: string;
    url: string;
}

const Header: React.StatelessComponent<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <header className="header">
            <Link to={props.url} className="header__logo">
                {props.name}
            </Link>
            <video className="header__video" autoPlay loop>
                <source src="/assets/dust.mp4" type="video/mp4" />
            </video>
        </header>
    );
};

export default Header;
