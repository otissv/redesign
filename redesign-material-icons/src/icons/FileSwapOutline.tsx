import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileSwapOutlineIcon: FC<IconsInterface> = function FileSwapOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileSwapOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileSwapOutline" className={classNames} {...propsRest}>
      <path d="M17 15L14 12V14H10V12L7 15L10 18V16H14V18M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18Z" />
    </Icon>
  );
};

FileSwapOutlineIcon.displayName = 'FileSwapOutlineIcon';  
  