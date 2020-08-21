import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableRowIcon: FC<IconsInterface> = function TableRowIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableRowIcon ${className}`, [className]);

  return (
    <Icon alt="TableRow" className={classNames} {...propsRest}>
      <path d="M22,14A2,2 0 0,1 20,16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8H20A2,2 0 0,1 22,10V14M4,14H8V10H4V14M10,14H14V10H10V14M16,14H20V10H16V14Z" />
    </Icon>
  );
};

TableRowIcon.displayName = 'TableRowIcon';  
  