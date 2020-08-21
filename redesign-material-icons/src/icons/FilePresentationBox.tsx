import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const FilePresentationBoxIcon: FC<IconsInterface> = function FilePresentationBoxIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `FilePresentationBoxIcon ${className}`, [className]);

  return (
    <Icon alt="FilePresentationBox" className={classNames} {...propsRest}>
      <path d="M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
    </Icon>
  );
};

FilePresentationBoxIcon.displayName = 'FilePresentationBoxIcon';  
  