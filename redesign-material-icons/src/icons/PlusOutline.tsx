import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusOutlineIcon: FC<IconsInterface> = function PlusOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="PlusOutline" className={classNames} {...propsRest}>
      <path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" />
    </Icon>
  );
};

PlusOutlineIcon.displayName = 'PlusOutlineIcon';  
  