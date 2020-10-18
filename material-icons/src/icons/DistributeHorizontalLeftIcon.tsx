import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DistributeHorizontalLeftIcon: FC<IconInterface> = function DistributeHorizontalLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DistributeHorizontalLeftIcon ${className}`;
      return (
        <Icon alt="DistributeHorizontalLeft" className={classNames} {...propsRest}>
          <path d="M21 7V17H16V22H14V2H16V7H21M5 2H3V22H5V19H10V5H5V2Z" />

        </Icon>
      );
    };
    DistributeHorizontalLeftIcon.displayName = 'DistributeHorizontalLeftIcon';
      