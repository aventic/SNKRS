import { ISocial } from '@src/interfaces/social';
import * as React from 'react';
import SvgIcon from '@src/components/SvgIcon';

interface ISocialProps {
    social: ISocial;
}

const Social: React.SFC<ISocialProps> = ({ social }: ISocialProps) => {
    return (
        <div className="social">
            <ul className="social__list">
                <li className="social__item">
                    <a href={social.facebookLink} target="_blank" className="social__link">
                        <SvgIcon className="social__icon" icon="facebook" />
                    </a>
                </li>
                <li className="social__item">
                    <a href={social.twitterLink} target="_blank" className="social__link">
                        <SvgIcon className="social__icon" icon="twitter" />
                    </a>
                </li>
                <li className="social__item">
                    <a href={social.instagramLink} target="_blank" className="social__link">
                        <SvgIcon className="social__icon" icon="instagram" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;
