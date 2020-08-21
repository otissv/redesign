import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileOutlineIcon: FC<IconsInterface> = function FileOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileOutline" className={classNames} {...propsRest}>
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
    </Icon>
  );
};

FileOutlineIcon.displayName = 'FileOutlineIcon';  
  