import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrangeBringForwardIcon: FC<IconInterface> = function ArrangeBringForwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrangeBringForwardIcon ${className}`;
      return (
        <Icon alt="ArrangeBringForward" className={classNames} {...propsRest}>
          <path d="M2,2H16V16H2V2M22,8V22H8V18H10V20H20V10H18V8H22Z" />

        </Icon>
      );
    };
    ArrangeBringForwardIcon.displayName = 'ArrangeBringForwardIcon';
      