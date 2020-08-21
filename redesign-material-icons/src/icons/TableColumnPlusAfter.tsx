import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableColumnPlusAfterIcon: FC<IconsInterface> = function TableColumnPlusAfterIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableColumnPlusAfterIcon ${className}`, [className]);

  return (
    <Icon alt="TableColumnPlusAfter" className={classNames} {...propsRest}>
      <path d="M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z" />
    </Icon>
  );
};

TableColumnPlusAfterIcon.displayName = 'TableColumnPlusAfterIcon';  
  