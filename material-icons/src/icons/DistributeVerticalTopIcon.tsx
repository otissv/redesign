import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DistributeVerticalTopIcon: FC<IconInterface> = function DistributeVerticalTopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DistributeVerticalTopIcon ${className}`;
      return (
        <Icon alt="DistributeVerticalTop" className={classNames} {...propsRest}>
          <path d="M17 21H7V16H2V14H22V16H17V21M22 5V3H2V5H5V10H19V5H22Z" />

        </Icon>
      );
    };
    DistributeVerticalTopIcon.displayName = 'DistributeVerticalTopIcon';
      