import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusOneIcon: FC<IconsInterface> = function PlusOneIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusOneIcon ${className}`, [className]);

  return (
    <Icon alt="PlusOne" className={classNames} {...propsRest}>
      <path d="M10,8V12H14V14H10V18H8V14H4V12H8V8H10M14.5,6.08L19,5V18H17V7.4L14.5,7.9V6.08Z" />
    </Icon>
  );
};

PlusOneIcon.displayName = 'PlusOneIcon';  
  