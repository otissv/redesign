import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DistributeVerticalCenterIcon: FC<IconInterface> = function DistributeVerticalCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DistributeVerticalCenterIcon ${className}`;
      return (
        <Icon alt="DistributeVerticalCenter" className={classNames} {...propsRest}>
          <path d="M2 16H5V14H19V16H22V18H19V20H5V18H2V16M2 8H7V10H17V8H22V6H17V4H7V6H2V8Z" />

        </Icon>
      );
    };
    DistributeVerticalCenterIcon.displayName = 'DistributeVerticalCenterIcon';
      