import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileExcelBoxIcon: FC<IconsInterface> = function FileExcelBoxIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileExcelBoxIcon ${className}`, [className]);

  return (
    <Icon alt="FileExcelBox" className={classNames} {...propsRest}>
      <path d="M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
    </Icon>
  );
};

FileExcelBoxIcon.displayName = 'FileExcelBoxIcon';  
  