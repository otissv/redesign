import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileAlertIcon: FC<IconsInterface> = function FileAlertIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileAlertIcon ${className}`, [className]);

  return (
    <Icon alt="FileAlert" className={classNames} {...propsRest}>
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M10,18H8V16H10V18M10,14H8V9H10V14M13,9V3.5L18.5,9H13Z" />
    </Icon>
  );
};

FileAlertIcon.displayName = 'FileAlertIcon';  
  