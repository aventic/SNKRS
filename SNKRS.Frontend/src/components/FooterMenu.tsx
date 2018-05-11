import { IFooterMenu } from '@src/interfaces/footer-menu';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IFooterProps {
    footerMenu: IFooterMenu[];
}

const Social: React.SFC<IFooterProps> = ({ footerMenu }: IFooterProps) => {
    return (
        <div className="footer-menu">
            <ul className="footer-menu__list">
                {footerMenu.map(menuItem => (
                    <li className="footer-menu__item" key={menuItem.name}>
                        <Link to={menuItem.url} className="footer-menu__link link-effect">
                            {menuItem.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;
