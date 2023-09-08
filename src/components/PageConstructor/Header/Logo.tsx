import { LogoRND, LogoMMK } from '../../../images';

import { Icon } from '../../../views/common';

import style from './index.module.scss';

const Logo = () => (
    <div className={style.logo}>
        <Icon height={40} width={40} variant='secondary'><LogoRND/></Icon>
        <Icon height={40} width={40}><LogoMMK/></Icon>

        {/* <div className={style.icon_logo_wrap}>
      <Icon
        className={cn(style.icon, style.icon_logo, style.icon_logo_rnd)}
        src={logoRND}
      />
    </div>
    <div className={style.icon_logo_wrap}>
      <Icon
        className={cn(style.icon, style.icon_logo, style.icon_logo_mmk)}
        src={logoMMK}
      />
    </div> */}
    </div>
);

export default Logo;
