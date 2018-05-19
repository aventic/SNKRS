import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMenu } from '@src/interfaces/menu';

interface IMenuProps {
    menu: IMenu[];
}

const Menu: React.SFC<IMenuProps> = ({ menu }: IMenuProps) => {
    return (
        <div className="menu">
            <ul className="menu__list">
                {menu.map(menuItem => (
                    <li className="menu__item" key={menuItem.name}>
                        <Link to={menuItem.url} className="menu__link link-effect">
                            {menuItem.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
