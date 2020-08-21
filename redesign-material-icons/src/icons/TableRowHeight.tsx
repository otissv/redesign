import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableRowHeightIcon: FC<IconsInterface> = function TableRowHeightIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableRowHeightIcon ${className}`, [className]);

  return (
    <Icon alt="TableRowHeight" className={classNames} {...propsRest}>
      <path d="M3,5H15A2,2 0 0,1 17,7V17A2,2 0 0,1 15,19H3A2,2 0 0,1 1,17V7A2,2 0 0,1 3,5M3,9V12H8V9H3M10,9V12H15V9H10M3,14V17H8V14H3M10,14V17H15V14H10M23,14V7H19V9H21V12H19V14H23Z" />
    </Icon>
  );
};

TableRowHeightIcon.displayName = 'TableRowHeightIcon';  
  