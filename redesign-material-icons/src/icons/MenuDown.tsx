import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuDownIcon: FC<IconsInterface> = function MenuDownIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuDownIcon ${className}`, [className]);

  return (
    <Icon alt="MenuDown" className={classNames} {...propsRest}>
      <path d="M7,10L12,15L17,10H7Z" />
    </Icon>
  );
};

MenuDownIcon.displayName = 'MenuDownIcon';  
  