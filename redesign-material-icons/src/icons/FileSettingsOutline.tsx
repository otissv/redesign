import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FileSettingsOutlineIcon: FC<IconsInterface> = function FileSettingsOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FileSettingsOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FileSettingsOutline" className={classNames} {...propsRest}>
      <path d="M6 0A2 2 0 0 0 4 2V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V6L14 0H6M6 2H13V7H18V18H6V2M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z" />
    </Icon>
  );
};

FileSettingsOutlineIcon.displayName = 'FileSettingsOutlineIcon';  
  