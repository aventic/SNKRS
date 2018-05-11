import * as React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '@src/components/SvgIcon';
import { IFooterMenu } from '@src/interfaces/footer-menu';
import { ISocial } from '@src/interfaces/social';
import Social from '@src/components/Social';
import Usp from '@src/components/Usp';
import FooterMenu from '@src/components/FooterMenu';

interface IFooterProps {
    footerMenu: IFooterMenu[];
    social: ISocial;
}

const Footer: React.SFC<IFooterProps> = ({ social, footerMenu }: IFooterProps) => (
    <div className="footer">
        <div className="footer__newsletter">
            <div className="container">
                <div className="row">
                    <div className="column">Newsltter</div>
                </div>
            </div>
        </div>
        <div className="footer__usp">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Usp />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__menu">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <FooterMenu footerMenu={footerMenu} />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__social">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Social social={social} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
