import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DistributeVerticalBottomIcon: FC<IconInterface> = function DistributeVerticalBottomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DistributeVerticalBottomIcon ${className}`;
      return (
        <Icon alt="DistributeVerticalBottom" className={classNames} {...propsRest}>
          <path d="M7 3H17V8H22V10H2V8H7V3M2 19V21H22V19H19V14H5V19H2Z" />

        </Icon>
      );
    };
    DistributeVerticalBottomIcon.displayName = 'DistributeVerticalBottomIcon';
      