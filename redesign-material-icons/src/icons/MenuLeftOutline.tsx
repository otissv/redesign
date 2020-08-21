import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuLeftOutlineIcon: FC<IconsInterface> = function MenuLeftOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuLeftOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="MenuLeftOutline" className={classNames} {...propsRest}>
      <path d="M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z" />
    </Icon>
  );
};

MenuLeftOutlineIcon.displayName = 'MenuLeftOutlineIcon';  
  