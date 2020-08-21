import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileTreeIcon: FC<IconsInterface> = function FileTreeIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileTreeIcon ${className}`, [className]);

  return (
    <Icon alt="FileTree" className={classNames} {...propsRest}>
      <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
    </Icon>
  );
};

FileTreeIcon.displayName = 'FileTreeIcon';  
  