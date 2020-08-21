import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const ContentSaveMoveIcon: FC<IconsInterface> = function ContentSaveMoveIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `ContentSaveMoveIcon ${className}`, [className]);

  return (
    <Icon alt="ContentSaveMove" className={classNames} {...propsRest}>
      <path d="M17,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H11.81C11.42,20.34 11.17,19.6 11.07,18.84C9.5,18.31 8.66,16.6 9.2,15.03C9.61,13.83 10.73,13 12,13C12.44,13 12.88,13.1 13.28,13.29C15.57,11.5 18.83,11.59 21,13.54V7L17,3M15,9H5V5H15V9M13,17H17V14L22,18.5L17,23V20H13V17" />
    </Icon>
  );
};

ContentSaveMoveIcon.displayName = 'ContentSaveMoveIcon';  
  