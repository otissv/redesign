import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusMinusVariantIcon: FC<IconsInterface> = function PlusMinusVariantIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusMinusVariantIcon ${className}`, [className]);

  return (
    <Icon alt="PlusMinusVariant" className={classNames} {...propsRest}>
      <path d="M3 7H6V4H8V7H11V9H8V12H6V9H3V7M13 15H21V17H13V15M16.04 3H18.35L7.96 21H5.65L16.04 3Z" />
    </Icon>
  );
};

PlusMinusVariantIcon.displayName = 'PlusMinusVariantIcon';  
  