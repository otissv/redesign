import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableColumnRemoveIcon: FC<IconsInterface> = function TableColumnRemoveIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableColumnRemoveIcon ${className}`, [className]);

  return (
    <Icon alt="TableColumnRemove" className={classNames} {...propsRest}>
      <path d="M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z" />
    </Icon>
  );
};

TableColumnRemoveIcon.displayName = 'TableColumnRemoveIcon';  
  