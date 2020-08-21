import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableColumnWidthIcon: FC<IconsInterface> = function TableColumnWidthIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableColumnWidthIcon ${className}`, [className]);

  return (
    <Icon alt="TableColumnWidth" className={classNames} {...propsRest}>
      <path d="M5,8H19A2,2 0 0,1 21,10V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V10A2,2 0 0,1 5,8M5,12V15H11V12H5M13,12V15H19V12H13M5,17V20H11V17H5M13,17V20H19V17H13M11,2H21V6H19V4H13V6H11V2Z" />
    </Icon>
  );
};

TableColumnWidthIcon.displayName = 'TableColumnWidthIcon';  
  