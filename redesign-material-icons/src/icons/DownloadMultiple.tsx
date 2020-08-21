import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const DownloadMultipleIcon: FC<IconsInterface> = function DownloadMultipleIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `DownloadMultipleIcon ${className}`, [className]);

  return (
    <Icon alt="DownloadMultiple" className={classNames} {...propsRest}>
      <path d="M9,1V7H5L12,14L19,7H15V1H9M5,16V18H19V16H5M5,20V22H19V20H5Z" />
    </Icon>
  );
};

DownloadMultipleIcon.displayName = 'DownloadMultipleIcon';  
  