import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuDownOutlineIcon: FC<IconsInterface> = function MenuDownOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuDownOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="MenuDownOutline" className={classNames} {...propsRest}>
      <path d="M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z" />
    </Icon>
  );
};

MenuDownOutlineIcon.displayName = 'MenuDownOutlineIcon';  
  