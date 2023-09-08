import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// import { Navigation } from '..';
// import Logo from './Logo';
// import User from './User';
// import Cameras from './Cameras';
import { ROUTE_INFO } from '../../../const/common';
import Logo from './Logo';

import { PropsType } from './types';
import style from './index.module.scss';

const Header: FC<PropsType> = () => {
    const {pathname} = useLocation();

    return (
        <header className={style.component}>
            <Logo/>
            <div>cameras</div>
            {/* {pathname === ROUTE_INFO.main.path && <Cameras />} */}
            {/* {showLinks && <Navigation />} */}
            <div>rnd btns</div>
            {/* <User /> */}
            <div>user</div>
        </header>
    );
};

export default Header;