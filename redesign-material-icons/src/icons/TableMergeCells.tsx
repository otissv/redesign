import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableMergeCellsIcon: FC<IconsInterface> = function TableMergeCellsIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableMergeCellsIcon ${className}`, [className]);

  return (
    <Icon alt="TableMergeCells" className={classNames} {...propsRest}>
      <path d="M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z" />
    </Icon>
  );
};

TableMergeCellsIcon.displayName = 'TableMergeCellsIcon';  
  