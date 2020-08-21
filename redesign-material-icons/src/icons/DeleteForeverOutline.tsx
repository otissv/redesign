import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const DeleteForeverOutlineIcon: FC<IconsInterface> = function DeleteForeverOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `DeleteForeverOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="DeleteForeverOutline" className={classNames} {...propsRest}>
      <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
    </Icon>
  );
};

DeleteForeverOutlineIcon.displayName = 'DeleteForeverOutlineIcon';  
  