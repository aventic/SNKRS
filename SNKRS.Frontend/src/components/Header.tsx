import SvgIcon from '@src/components/SvgIcon';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '@src/components/Scroll';
import ScrollTop from '@src/components/ScrollTop';
import Anima from '@src/components/Anima';

interface IHeaderProps {
    name: string;
    url: string;
}

const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <header className="header">
            <Link to={props.url} className="header__logo">
                {props.name}
            </Link>
            <video className="header__video" autoPlay loop>
                <source src="/dist/assets/dust.mp4" type="video/mp4" />
            </video>
            <Scroll>
                {scrollY => (
                    <Anima toggle={scrollY > 300} delay={500}>
                        {active => (
                            <div className={'header__scroll-top ' + (active ? 'header__scroll-top_active' : '')}>
                                <ScrollTop />
                            </div>
                        )}
                    </Anima>
                )}
            </Scroll>
        </header>
    );
};

export default Header;
