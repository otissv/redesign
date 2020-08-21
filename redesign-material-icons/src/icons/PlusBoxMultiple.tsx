import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusBoxMultipleIcon: FC<IconsInterface> = function PlusBoxMultipleIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusBoxMultipleIcon ${className}`, [className]);

  return (
    <Icon alt="PlusBoxMultiple" className={classNames} {...propsRest}>
      <path d="M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z" />
    </Icon>
  );
};

PlusBoxMultipleIcon.displayName = 'PlusBoxMultipleIcon';  
  