import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const DownloadBoxOutlineIcon: FC<IconsInterface> = function DownloadBoxOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `DownloadBoxOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="DownloadBoxOutline" className={classNames} {...propsRest}>
      <path d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V7H13.5V10H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z" />
    </Icon>
  );
};

DownloadBoxOutlineIcon.displayName = 'DownloadBoxOutlineIcon';  
  