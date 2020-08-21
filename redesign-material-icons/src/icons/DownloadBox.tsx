import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const DownloadBoxIcon: FC<IconsInterface> = function DownloadBoxIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `DownloadBoxIcon ${className}`, [className]);

  return (
    <Icon alt="DownloadBox" className={classNames} {...propsRest}>
      <path d="M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M8 17H16V15H8V17M16 10H13.5V7H10.5V10H8L12 14L16 10Z" />
    </Icon>
  );
};

DownloadBoxIcon.displayName = 'DownloadBoxIcon';  
  