import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileImageIcon: FC<IconsInterface> = function FileImageIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileImageIcon ${className}`, [className]);

  return (
    <Icon alt="FileImage" className={classNames} {...propsRest}>
      <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z" />
    </Icon>
  );
};

FileImageIcon.displayName = 'FileImageIcon';  
  