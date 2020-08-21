import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const HomeIcon: FC<IconsInterface> = function HomeIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `HomeIcon ${className}`, [className]);

  return (
    <Icon alt="Home" className={classNames} {...propsRest}>
      <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
    </Icon>
  );
};

HomeIcon.displayName = 'HomeIcon';  
  