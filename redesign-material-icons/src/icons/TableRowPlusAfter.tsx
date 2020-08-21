import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableRowPlusAfterIcon: FC<IconsInterface> = function TableRowPlusAfterIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableRowPlusAfterIcon ${className}`, [className]);

  return (
    <Icon alt="TableRowPlusAfter" className={classNames} {...propsRest}>
      <path d="M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z" />
    </Icon>
  );
};

TableRowPlusAfterIcon.displayName = 'TableRowPlusAfterIcon';  
  