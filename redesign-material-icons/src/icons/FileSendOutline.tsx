import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileSendOutlineIcon: FC<IconsInterface> = function FileSendOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileSendOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileSendOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M12.54 18.5V16.5H8.54V14.5H12.54V12.5L15.54 15.5L12.54 18.5Z" />
    </Icon>
  );
};

FileSendOutlineIcon.displayName = 'FileSendOutlineIcon';  
  