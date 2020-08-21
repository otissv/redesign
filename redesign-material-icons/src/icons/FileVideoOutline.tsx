import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileVideoOutlineIcon: FC<IconsInterface> = function FileVideoOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileVideoOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileVideoOutline" className={classNames} {...propsRest}>
      <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M16,18L13.5,16.3V18H8V13H13.5V14.7L16,13V18Z" />
    </Icon>
  );
};

FileVideoOutlineIcon.displayName = 'FileVideoOutlineIcon';  
  