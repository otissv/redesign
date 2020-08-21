import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuUpIcon: FC<IconsInterface> = function MenuUpIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuUpIcon ${className}`, [className]);

  return (
    <Icon alt="MenuUp" className={classNames} {...propsRest}>
      <path d="M7,15L12,10L17,15H7Z" />
    </Icon>
  );
};

MenuUpIcon.displayName = 'MenuUpIcon';  
  