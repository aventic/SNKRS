import * as React from 'react';

interface ISvgIconProps {
    icon: string;
    className?: string;
}

const SvgIcon: React.SFC<ISvgIconProps> = ({ icon, ...props }: ISvgIconProps) => {
    const svg = require(`../assets/svg/${icon}.svg`);
    return <span {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default SvgIcon;
