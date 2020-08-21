import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusIcon: FC<IconsInterface> = function PlusIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusIcon ${className}`, [className]);

  return (
    <Icon alt="Plus" className={classNames} {...propsRest}>
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </Icon>
  );
};

PlusIcon.displayName = 'PlusIcon';  
  