import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuLeftIcon: FC<IconsInterface> = function MenuLeftIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuLeftIcon ${className}`, [className]);

  return (
    <Icon alt="MenuLeft" className={classNames} {...propsRest}>
      <path d="M14,7L9,12L14,17V7Z" />
    </Icon>
  );
};

MenuLeftIcon.displayName = 'MenuLeftIcon';  
  