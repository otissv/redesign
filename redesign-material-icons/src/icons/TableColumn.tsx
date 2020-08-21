import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableColumnIcon: FC<IconsInterface> = function TableColumnIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableColumnIcon ${className}`, [className]);

  return (
    <Icon alt="TableColumn" className={classNames} {...propsRest}>
      <path d="M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,10V14H16V10H8M8,16V20H16V16H8M8,4V8H16V4H8Z" />
    </Icon>
  );
};

TableColumnIcon.displayName = 'TableColumnIcon';  
  