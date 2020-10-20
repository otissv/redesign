import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DistributeHorizontalCenterIcon: FC<IconInterface> = function DistributeHorizontalCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DistributeHorizontalCenterIcon ${className}`;
      return (
        <Icon alt="DistributeHorizontalCenter" className={classNames} {...propsRest}>
          <path d="M8 2V5H10V19H8V22H6V19H4V5H6V2H8M16 2V7H14V17H16V22H18V17H20V7H18V2H16Z" />

        </Icon>
      );
    };
    DistributeHorizontalCenterIcon.displayName = 'DistributeHorizontalCenterIcon';
      