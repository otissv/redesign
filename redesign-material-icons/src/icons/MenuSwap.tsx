import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const MenuSwapIcon: FC<IconsInterface> = function MenuSwapIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `MenuSwapIcon ${className}`, [className]);

  return (
    <Icon alt="MenuSwap" className={classNames} {...propsRest}>
      <path d="M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z" />
    </Icon>
  );
};

MenuSwapIcon.displayName = 'MenuSwapIcon';  
  