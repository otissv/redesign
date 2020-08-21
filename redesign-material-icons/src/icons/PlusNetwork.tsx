import React, { FC, useMemo } from 'react';

import { IconsInterface } from '../icons.types';
import { Icon } from '../Icon';

export const PlusNetworkIcon: FC<IconsInterface> = function PlusNetworkIcon({
  className,
  ...propsRest
}) {

  const classNames = useMemo(() => `PlusNetworkIcon ${className}`, [className]);

  return (
    <Icon alt="PlusNetwork" className={classNames} {...propsRest}>
      <path d="M16,11V9H13V6H11V9H8V11H11V14H13V11H16M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z" />
    </Icon>
  );
};

PlusNetworkIcon.displayName = 'PlusNetworkIcon';  
  