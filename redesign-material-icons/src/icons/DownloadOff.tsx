import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const DownloadOffIcon: FC<IconsInterface> = function DownloadOffIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `DownloadOffIcon ${className}`, [className]);

  return (
    <Icon alt="DownloadOff" className={classNames} {...propsRest}>
      <path d="M20.84 22.73L18.11 20H5V18H16.11L13.06 14.95L12 16L5 9H7.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 9H15V3H9V5.8L15.6 12.4L19 9Z" />
    </Icon>
  );
};

DownloadOffIcon.displayName = 'DownloadOffIcon';  
  