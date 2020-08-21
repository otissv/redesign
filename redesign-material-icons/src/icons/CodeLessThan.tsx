import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const CodeLessThanIcon: FC<IconsInterface> = function CodeLessThanIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `CodeLessThanIcon ${className}`, [className]);

  return (
    <Icon alt="CodeLessThan" className={classNames} {...propsRest}>
      <path d="M13.59,7.41L9,12L13.59,16.6L15,15.18L11.82,12L15,8.82M19,3C20.11,3 21,3.9 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19Z" />
    </Icon>
  );
};

CodeLessThanIcon.displayName = 'CodeLessThanIcon';  
  