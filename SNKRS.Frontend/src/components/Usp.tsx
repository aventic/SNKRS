import * as React from 'react';
import SvgIcon from '@src/components/SvgIcon';

const Usp: React.SFC<any> = () => {
    return (
        <div className="usp">
            <ul className="usp__list">
                <li className="usp__item">
                    <SvgIcon className="usp__icon" icon="world" /> Worldwide shipping
                </li>
                <li className="usp__item">
                    <SvgIcon className="usp__icon" icon="delivery" /> Free delivery and returns
                </li>
                <li className="usp__item">
                    <SvgIcon className="usp__icon" icon="lock" /> Secure payment
                </li>
            </ul>
        </div>
    );
};

export default Usp;
