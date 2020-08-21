import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileKeyOutlineIcon: FC<IconsInterface> = function FileKeyOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileKeyOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileKeyOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18M12.83 15A3 3 0 1 0 12.83 17H14V19H16V17H17V15M10 17A1 1 0 1 1 11 16A1 1 0 0 1 10 17Z" />
    </Icon>
  );
};

FileKeyOutlineIcon.displayName = 'FileKeyOutlineIcon';  
  