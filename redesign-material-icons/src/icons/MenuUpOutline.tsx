import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuUpOutlineIcon: FC<IconsInterface> = function MenuUpOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuUpOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="MenuUpOutline" className={classNames} {...propsRest}>
      <path d="M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z" />
    </Icon>
  );
};

MenuUpOutlineIcon.displayName = 'MenuUpOutlineIcon';  
  