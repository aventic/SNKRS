import Newsletter from '@src/components/Newsletter';
import Social from '@src/components/Social';
import Usp from '@src/components/Usp';
import { ISocial } from '@src/interfaces/social';
import * as React from 'react';
import { IMenu } from '@src/interfaces/menu';
import Menu from '@src/components/Menu';

interface IFooterProps {
    footerMenu: IMenu[];
    social: ISocial;
}

const Footer: React.SFC<IFooterProps> = ({ social, footerMenu }: IFooterProps) => (
    <div className="footer">
        <div className="footer__newsletter">
            <Newsletter />
        </div>
        <div className="footer__usp">
            <Usp />
        </div>
        <div className="footer__menu">
            <Menu menu={footerMenu} />
        </div>
        <div className="footer__social">
            <Social social={social} />
        </div>
    </div>
);

export default Footer;
