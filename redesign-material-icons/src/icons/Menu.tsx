import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuIcon: FC<IconsInterface> = function MenuIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuIcon ${className}`, [className]);

  return (
    <Icon alt="Menu" className={classNames} {...propsRest}>
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </Icon>
  );
};

MenuIcon.displayName = 'MenuIcon';  
  