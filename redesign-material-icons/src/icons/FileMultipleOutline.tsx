import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileMultipleOutlineIcon: FC<IconsInterface> = function FileMultipleOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileMultipleOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileMultipleOutline" className={classNames} {...propsRest}>
      <path d="M16 0H8C6.9 0 6 .9 6 2V18C6 19.1 6.9 20 8 20H20C21.1 20 22 19.1 22 18V6L16 0M20 18H8V2H15V7H20V18M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4Z" />
    </Icon>
  );
};

FileMultipleOutlineIcon.displayName = 'FileMultipleOutlineIcon';  
  