import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const CodeBracketsIcon: FC<IconsInterface> = function CodeBracketsIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `CodeBracketsIcon ${className}`, [className]);

  return (
    <Icon alt="CodeBrackets" className={classNames} {...propsRest}>
      <path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z" />
    </Icon>
  );
};

CodeBracketsIcon.displayName = 'CodeBracketsIcon';  
  