import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableIcon: FC<IconsInterface> = function TableIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableIcon ${className}`, [className]);

  return (
    <Icon alt="Table" className={classNames} {...propsRest}>
      <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
    </Icon>
  );
};

TableIcon.displayName = 'TableIcon';  
  