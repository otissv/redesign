import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const AlertOutlineIcon: FC<IconsInterface> = function AlertOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `AlertOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="AlertOutline" className={classNames} {...propsRest}>
      <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
    </Icon>
  );
};

AlertOutlineIcon.displayName = 'AlertOutlineIcon';  
  