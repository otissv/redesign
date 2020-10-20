import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PerspectiveLessIcon: FC<IconInterface> = function PerspectiveLessIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PerspectiveLessIcon ${className}`;
      return (
        <Icon alt="PerspectiveLess" className={classNames} {...propsRest}>
          <path d="M16.56,12L19.23,20H4.78L7.44,12H16.56M7,1L3,5L7,9V6H11V4H7V1M17,1V4H13V6H17V9L21,5L17,1M18,10H6L2,22H22L18,10Z" />

        </Icon>
      );
    };
    PerspectiveLessIcon.displayName = 'PerspectiveLessIcon';
      