import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DistributeHorizontalRightIcon: FC<IconInterface> = function DistributeHorizontalRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DistributeHorizontalRightIcon ${className}`;
      return (
        <Icon alt="DistributeHorizontalRight" className={classNames} {...propsRest}>
          <path d="M3 17V7H8V2H10V22H8V17H3M19 22H21V2H19V5H14V19H19V22Z" />

        </Icon>
      );
    };
    DistributeHorizontalRightIcon.displayName = 'DistributeHorizontalRightIcon';
      