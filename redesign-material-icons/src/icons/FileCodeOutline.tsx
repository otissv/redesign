import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileCodeOutlineIcon: FC<IconsInterface> = function FileCodeOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileCodeOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileCodeOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M9.54 15.65L11.63 17.74L10.35 19L7 15.65L10.35 12.3L11.63 13.56L9.54 15.65M17 15.65L13.65 19L12.38 17.74L14.47 15.65L12.38 13.56L13.65 12.3L17 15.65Z" />
    </Icon>
  );
};

FileCodeOutlineIcon.displayName = 'FileCodeOutlineIcon';  
  