import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const AlertIcon: FC<IconsInterface> = function AlertIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `AlertIcon ${className}`, [className]);

  return (
    <Icon alt="Alert" className={classNames} {...propsRest}>
      <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
    </Icon>
  );
};

AlertIcon.displayName = 'AlertIcon';  
  