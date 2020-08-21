import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusBoxOutlineIcon: FC<IconsInterface> = function PlusBoxOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusBoxOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="PlusBoxOutline" className={classNames} {...propsRest}>
      <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
    </Icon>
  );
};

PlusBoxOutlineIcon.displayName = 'PlusBoxOutlineIcon';  
  