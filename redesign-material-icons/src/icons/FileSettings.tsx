import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileSettingsIcon: FC<IconsInterface> = function FileSettingsIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileSettingsIcon ${className}`, [className]);

  return (
    <Icon alt="FileSettings" className={classNames} {...propsRest}>
      <path d="M6 0C4.89 0 4 .89 4 2V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V6L14 0H6M13 1.5L18.5 7H13V1.5M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z" />
    </Icon>
  );
};

FileSettingsIcon.displayName = 'FileSettingsIcon';  
  