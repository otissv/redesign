import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileDocumentIcon: FC<IconsInterface> = function FileDocumentIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileDocumentIcon ${className}`, [className]);

  return (
    <Icon alt="FileDocument" className={classNames} {...propsRest}>
      <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
    </Icon>
  );
};

FileDocumentIcon.displayName = 'FileDocumentIcon';  
  