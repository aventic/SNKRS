import MainMenu from '@src/components/MainMenu';
import Scroll from '@src/components/Scroll';
import { IMainMenu } from '@src/interfaces/main-menu';
import * as React from 'react';

interface ITopBarProps {
    mainMenu: IMainMenu[];
}

const TopBar: React.SFC<ITopBarProps> = ({ mainMenu }: ITopBarProps) => {
    return (
        <Scroll>
            {scrollY => (
                <header className={'top-bar ' + (scrollY > 0 ? 'top-bar_active' : '')}>
                    <MainMenu mainMenu={mainMenu} />
                </header>
            )}
        </Scroll>
    );
}

export default TopBar;
