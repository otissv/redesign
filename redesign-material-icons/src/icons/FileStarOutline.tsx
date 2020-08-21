import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileStarOutlineIcon: FC<IconsInterface> = function FileStarOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileStarOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileStarOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M9.5 18L10.2 15.2L8 13.3L10.9 13.1L12 10.4L13.1 13L16 13.2L13.8 15.1L14.5 17.9L12 16.5L9.5 18Z" />
    </Icon>
  );
};

FileStarOutlineIcon.displayName = 'FileStarOutlineIcon';  
  