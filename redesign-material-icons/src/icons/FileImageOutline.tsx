import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileImageOutlineIcon: FC<IconsInterface> = function FileImageOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileImageOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileImageOutline" className={classNames} {...propsRest}>
      <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M17,13V19H7L12,14L14,16M10,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,9A1.5,1.5 0 0,1 10,10.5Z" />
    </Icon>
  );
};

FileImageOutlineIcon.displayName = 'FileImageOutlineIcon';  
  