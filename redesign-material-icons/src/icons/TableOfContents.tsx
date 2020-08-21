import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const TableOfContentsIcon: FC<IconsInterface> = function TableOfContentsIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `TableOfContentsIcon ${className}`, [className]);

  return (
    <Icon alt="TableOfContents" className={classNames} {...propsRest}>
      <path d="M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" />
    </Icon>
  );
};

TableOfContentsIcon.displayName = 'TableOfContentsIcon';  
  