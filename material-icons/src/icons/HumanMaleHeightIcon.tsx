import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HumanMaleHeightIcon: FC<IconInterface> = function HumanMaleHeightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanMaleHeightIcon ${className}`;
      return (
        <Icon alt="HumanMaleHeight" className={classNames} {...propsRest}>
          <path d="M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21" />

        </Icon>
      );
    };
    HumanMaleHeightIcon.displayName = 'HumanMaleHeightIcon';
      