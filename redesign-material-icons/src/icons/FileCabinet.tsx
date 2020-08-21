import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileCabinetIcon: FC<IconsInterface> = function FileCabinetIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileCabinetIcon ${className}`, [className]);

  return (
    <Icon alt="FileCabinet" className={classNames} {...propsRest}>
      <path d="M14,8H10V6H14V8M20,4V20C20,21.11 19.11,22 18,22H6C4.89,22 4,21.11 4,20V4A2,2 0 0,1 6,2H18C19.11,2 20,2.9 20,4M18,13H6V20H18V13M18,4H6V11H18V4M14,15H10V17H14V15Z" />
    </Icon>
  );
};

FileCabinetIcon.displayName = 'FileCabinetIcon';  
  