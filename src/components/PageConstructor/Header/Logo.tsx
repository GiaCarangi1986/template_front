import cn from 'classnames';

import { logoRND, logoMMK } from '../../../images';
import { ReactComponent as LogoMMK } from '../../../images/logo/logoMMK.svg'
// import { Icon } from '../common';
import { IconButton } from '../../../views/common';
import SvgIcon from '@material-ui/core/SvgIcon';

import style from './index.module.scss';

const Logo = () => (
  <div className={style.logos}>
    <LogoMMK />
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
