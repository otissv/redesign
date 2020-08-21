import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileUndoOutlineIcon: FC<IconsInterface> = function FileUndoOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileUndoOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileUndoOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M17 17.61L15.84 18C15.33 16.44 13.86 15.31 12.13 15.31C11.17 15.31 10.31 15.66 9.63 16.23L11.4 18H7V13.6L8.76 15.36C9.66 14.57 10.83 14.09 12.13 14.09C14.4 14.09 16.33 15.57 17 17.61Z" />
    </Icon>
  );
};

FileUndoOutlineIcon.displayName = 'FileUndoOutlineIcon';  
  