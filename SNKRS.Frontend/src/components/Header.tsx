import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.StatelessComponent<any> = () => (
    <div>
        Yo!!!
        <Link to="/">Frontpage</Link>
        <Link to="/contact">Contact</Link>
    </div>
);

export default Header;