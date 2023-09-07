import { FC } from 'react';
import IconButtonUI from '@material-ui/core/IconButton';

import { PropsType } from './types';

const IconButton: FC<PropsType> = ({ children, ...props }) => {
    return (
        <IconButtonUI {...props}>
            {children}
        </IconButtonUI>
    )
}

export default IconButton;