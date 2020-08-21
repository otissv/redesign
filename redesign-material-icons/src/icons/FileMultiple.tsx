import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileMultipleIcon: FC<IconsInterface> = function FileMultipleIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileMultipleIcon ${className}`, [className]);

  return (
    <Icon alt="FileMultiple" className={classNames} {...propsRest}>
      <path d="M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z" />
    </Icon>
  );
};

FileMultipleIcon.displayName = 'FileMultipleIcon';  
  