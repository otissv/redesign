import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const AlertMinusIcon: FC<IconsInterface> = function AlertMinusIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `AlertMinusIcon ${className}`, [className]);

  return (
    <Icon alt="AlertMinus" className={classNames} {...propsRest}>
      <path d="M14 19C14 16.21 15.91 13.87 18.5 13.2L12 2L1 21H14.35C14.13 20.37 14 19.7 14 19M13 18H11V16H13V18M13 14H11V10H13V14M24 18V20H16V18H24Z" />
    </Icon>
  );
};

AlertMinusIcon.displayName = 'AlertMinusIcon';  
  