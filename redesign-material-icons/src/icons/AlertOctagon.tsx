import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const AlertOctagonIcon: FC<IconsInterface> = function AlertOctagonIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `AlertOctagonIcon ${className}`, [className]);

  return (
    <Icon alt="AlertOctagon" className={classNames} {...propsRest}>
      <path d="M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z" />
    </Icon>
  );
};

AlertOctagonIcon.displayName = 'AlertOctagonIcon';  
  