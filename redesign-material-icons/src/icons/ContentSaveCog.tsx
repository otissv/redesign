import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const ContentSaveCogIcon: FC<IconsInterface> = function ContentSaveCogIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `ContentSaveCogIcon ${className}`, [className]);

  return (
    <Icon alt="ContentSaveCog" className={classNames} {...propsRest}>
      <path d="M21 11.7V7L17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11.7C11.4 20.3 11.2 19.6 11.1 18.8C9.9 18.4 9 17.3 9 16C9 14.3 10.3 13 12 13C12.3 13 12.6 13.1 12.9 13.2C14.2 11.8 16 11 18 11C19.1 11 20.1 11.2 21 11.7M15 9H5V5H15V9M22.8 19.3L21.7 18.5V17.5L22.8 16.7C22.9 16.6 22.9 16.5 22.9 16.4L21.9 14.7C21.8 14.6 21.7 14.6 21.6 14.6L20.3 15C20 14.8 19.8 14.7 19.4 14.5L19.2 13.2C19.2 13.1 19.1 13 19 13H17C16.9 13 16.8 13.1 16.7 13.2L16.5 14.5C16.2 14.6 15.9 14.8 15.7 15L14.5 14.5C14.4 14.5 14.3 14.5 14.2 14.6L13.2 16.3C13.1 16.4 13.2 16.5 13.3 16.6L14.4 17.4V18.4L13.3 19.2C13.2 19.3 13.2 19.4 13.2 19.5L14.2 21.2C14.3 21.3 14.4 21.3 14.5 21.3L15.7 20.8C16 21 16.2 21.1 16.5 21.3L16.7 22.6C16.7 22.7 16.8 22.8 17 22.8H19C19.1 22.8 19.2 22.7 19.2 22.6L19.4 21.3C19.7 21.2 20 21 20.2 20.8L21.4 21.3C21.5 21.3 21.7 21.3 21.7 21.2L22.7 19.5C22.9 19.5 22.9 19.4 22.8 19.3M18 19.5C17.2 19.5 16.5 18.8 16.5 18S17.2 16.5 18 16.5 19.5 17.2 19.5 18 18.8 19.5 18 19.5Z" />
    </Icon>
  );
};

ContentSaveCogIcon.displayName = 'ContentSaveCogIcon';  
  