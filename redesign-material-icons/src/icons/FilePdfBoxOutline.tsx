import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FilePdfBoxOutlineIcon: FC<IconsInterface> = function FilePdfBoxOutlineIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FilePdfBoxOutlineIcon ${className}`, [className]);

  return (
    <Icon alt="FilePdfBoxOutline" className={classNames} {...propsRest}>
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V19H5V5H19M17.9 13.5C17.6 13 16.9 12.8 15.7 12.8C15.3 12.8 14.9 12.8 14.5 12.9C14.2 12.7 13.9 12.5 13.7 12.3C13.1 11.8 12.5 10.9 12.2 9.8V9.7C12.5 8.4 12.8 6.9 12.2 6.2C11.9 6.1 11.7 6 11.5 6H11.3C10.9 6 10.6 6.4 10.5 6.7C10.1 8 10.4 8.7 10.7 9.9C10.5 10.8 10.1 11.7 9.7 12.7C9.3 13.4 9 14 8.7 14.5C8.3 14.7 8 14.8 7.8 15C6.7 15.7 6.1 16.5 6 17V17.5L6.5 17.8C6.7 18 6.8 18 7 18C7.8 18 8.7 17.1 9.9 15H10C11 14.7 12.2 14.5 13.9 14.3C14.9 14.8 16.1 15 16.8 15C17.2 15 17.5 14.9 17.7 14.7C17.9 14.5 18 14.3 18 14.1C18 13.8 18 13.6 17.9 13.5M6.8 17.3C6.8 16.9 7.3 16.3 8 15.7C8.1 15.6 8.3 15.5 8.5 15.4C7.8 16.5 7.2 17.2 6.8 17.3M11.3 6.7C11.3 6.7 11.3 6.6 11.4 6.6H11.5C11.7 6.8 11.7 7.1 11.6 7.7V7.9C11.5 8.1 11.5 8.4 11.4 8.7C11.1 7.8 11.1 7.1 11.3 6.7M10.1 14.3H10C10.1 14 10.3 13.7 10.5 13.3C10.9 12.5 11.3 11.7 11.5 11C11.9 11.9 12.4 12.6 13 13.1C13.1 13.2 13.3 13.3 13.4 13.4C12.5 13.5 11.3 13.8 10.1 14.3M17.3 14.2H17.1C16.7 14.2 16 14 15.3 13.7C15.4 13.6 15.5 13.6 15.5 13.6C16.9 13.6 17.2 13.8 17.3 13.9L17.4 14C17.4 14.2 17.4 14.2 17.3 14.2Z" />
    </Icon>
  );
};

FilePdfBoxOutlineIcon.displayName = 'FilePdfBoxOutlineIcon';  
  