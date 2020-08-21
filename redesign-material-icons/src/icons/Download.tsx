import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const DownloadIcon: FC<IconsInterface> = function DownloadIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `DownloadIcon ${className}`, [className]);

  return (
    <Icon alt="Download" className={classNames} {...propsRest}>
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </Icon>
  );
};

DownloadIcon.displayName = 'DownloadIcon';  
  