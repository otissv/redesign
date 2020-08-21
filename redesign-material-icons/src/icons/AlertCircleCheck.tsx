import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const AlertCircleCheckIcon: FC<IconsInterface> = function AlertCircleCheckIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `AlertCircleCheckIcon ${className}`, [className]);

  return (
    <Icon alt="AlertCircleCheck" className={classNames} {...propsRest}>
      <path d="M18.75 22.16L16 19.16L17.16 18L18.75 19.59L22.34 16L23.5 17.41L18.75 22.16M13 13V7H11V13H13M13 17V15H11V17H13M12 2C17.5 2 22 6.5 22 12L21.91 13.31C21.31 13.11 20.67 13 20 13C16.69 13 14 15.69 14 19C14 19.95 14.22 20.85 14.62 21.65C13.78 21.88 12.91 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z" />
    </Icon>
  );
};

AlertCircleCheckIcon.displayName = 'AlertCircleCheckIcon';  
  