import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TablePlusIcon: FC<IconsInterface> = function TablePlusIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TablePlusIcon ${className}`, [className]);

  return (
    <Icon alt="TablePlus" className={classNames} {...propsRest}>
      <path d="M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z" />
    </Icon>
  );
};

TablePlusIcon.displayName = 'TablePlusIcon';  
  