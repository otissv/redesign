import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuRightIcon: FC<IconsInterface> = function MenuRightIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuRightIcon ${className}`, [className]);

  return (
    <Icon alt="MenuRight" className={classNames} {...propsRest}>
      <path d="M10,17L15,12L10,7V17Z" />
    </Icon>
  );
};

MenuRightIcon.displayName = 'MenuRightIcon';  
  