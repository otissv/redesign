import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileSwapIcon: FC<IconsInterface> = function FileSwapIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileSwapIcon ${className}`, [className]);

  return (
    <Icon alt="FileSwap" className={classNames} {...propsRest}>
      <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8M14 18V16H10V18L7 15L10 12V14H14V12L17 15M13 9V3.5L18.5 9Z" />
    </Icon>
  );
};

FileSwapIcon.displayName = 'FileSwapIcon';  
  